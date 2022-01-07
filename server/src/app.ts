// Deno.listen return value is async iterable connections
import ArticleRouter from './router/Article.ts';
import CategoryRouter from './router/Category.ts';
import Router from './lib/Router/index.ts';
import { GraphQLHTTP } from 'https://deno.land/x/gql@1.1.0/mod.ts';
import { makeExecutableSchema } from 'https://deno.land/x/graphql_tools@0.0.2/mod.ts';
import { typeDefs, resolvers } from './graphql/index.ts';

const __dirname = new URL('.', import.meta.url).pathname;

async function staticFileCatcher(
  requestEvent: Deno.RequestEvent
): Promise<void> {
  const { pathname } = new URL(requestEvent.request.url);
  const fileExtension = pathname.split('.')[1];
  try {
    if (pathname === '/') {
      const indexHtml = await Deno.readFile(`${__dirname}../build/index.html`);
      requestEvent.respondWith(
        new Response(indexHtml, {
          headers: {
            'content-type': `text/html`,
          },
        })
      );
      return;
    }
    const file = await Deno.readFile(`${__dirname}../build${pathname}`);
    requestEvent.respondWith(
      new Response(file, {
        headers: {
          'content-type': `text/${fileExtension}`,
        },
      })
    );
    return;
  } catch (err) {
    throw 'err , ' + err;
  }
}
async function handleConnection(
  registeredRouterList: Router[],
  requestEvent: Deno.RequestEvent
) {
  const url = new URL(requestEvent.request.url).pathname.split('/');
  if (url[1] === 'graphql') {
    try {
      const res = await GraphQLHTTP<Request>({
        schema: makeExecutableSchema({ resolvers, typeDefs }),
        graphiql: true,
      })(requestEvent.request);
      requestEvent.respondWith(res);
    } catch (err) {
      requestEvent.respondWith(
        new Response(`GraphQL ERROR : ${err}`, { status: 500 })
      );
      console.error(err);
    }
    return;
  }

  const router = registeredRouterList.find((router) =>
    router.compareRoute(url)
  );
  if (router) {
    router.setRequest(requestEvent);
    router.run();
    return;
  }
  try {
    await staticFileCatcher(requestEvent);
    return;
  } catch (err) {
    console.error('catch err : ', err);
  }
  requestEvent.respondWith(
    new Response('NO MATCH ROUTER', {
      status: 404,
    })
  );
}

const registeredRouterList = [] as Router[];

async function handle(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);
  for await (const requestEvent of httpConn) {
    handleConnection(registeredRouterList, requestEvent);
  }
}

function registerRouter() {
  registeredRouterList.push(new ArticleRouter('/api/article'));
  registeredRouterList.push(new CategoryRouter('/api/category'));
}

async function main() {
  const PORT = Number(Deno.env.get('SERVER_PORT')) || 80;
  registerRouter();
  console.log(`server run at http://localhost:${PORT}`);
  const server = Deno.listen({ port: PORT });
  for await (const conn of server) {
    handle(conn);
  }
}

main();
