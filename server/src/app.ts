// Deno.listen return value is async iterable connections
import ArticleRouter from './router/Article.ts';
import CategoryRouter from './router/Category.ts';
import Router from './lib/Router/index.ts';

function handleConnection(
  registeredRouterList: Router[],
  requestEvent: Deno.RequestEvent
) {
  const url = new URL(requestEvent.request.url).pathname.split('/');
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
  const PORT = 8080;
  registerRouter();
  console.log(`server run at http://localhost:${PORT}`);
  const server = Deno.listen({ port: PORT });
  for await (const conn of server) {
    handle(conn);
  }
}

main();
