// Deno.listen return value is async iterable connections
import ArticleRouter from './router/Article.ts';
import CategoryRouter from './router/Category.ts';
import Router from './lib/Router/index.ts';
import { GraphQLHTTP } from 'https://deno.land/x/gql@1.1.0/mod.ts';
import { makeExecutableSchema } from 'https://deno.land/x/graphql_tools@0.0.2/mod.ts';
import { typeDefs, resolvers } from './graphql/index.ts';

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
  const PORT = 8070;
  registerRouter();
  console.log(`server run at http://localhost:${PORT}`);
  const server = Deno.listen({ port: PORT });
  for await (const conn of server) {
    handle(conn);
  }
}

main();
