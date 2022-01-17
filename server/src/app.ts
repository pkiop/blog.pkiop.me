// Deno.listen return value is async iterable connections

import ArticleRouter from './router/Article.ts';
import CategoryRouter from './router/Category.ts';
import Router from './lib/Router/index.ts';
import {
  staticFileSender,
  graphQLSender,
  routerSender,
  clientSender,
} from './utils/Sender/index.ts';

const __dirname = new URL('.', import.meta.url).pathname;

async function handleConnection(
  registeredRouterList: Router[],
  requestEvent: Deno.RequestEvent
) {
  const url = new URL(requestEvent.request.url).pathname.split('/');

  if (await graphQLSender(requestEvent, url)) return;
  if (routerSender(requestEvent, registeredRouterList, url)) return;
  if (clientSender(requestEvent)) return;
  if (await staticFileSender(requestEvent)) return;

  const file = await Deno.readFile(`${__dirname}../build/index.html`);
  await requestEvent.respondWith(
    new Response(file, {
      headers: {
        'content-type': 'text/html',
      },
    })
  );

  return;
}

const registeredRouterList = [] as Router[];

async function handle(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);
  for await (const requestEvent of httpConn) {
    await handleConnection(registeredRouterList, requestEvent);
  }
}

function registerRouter() {
  registeredRouterList.push(new ArticleRouter('/api/article'));
  registeredRouterList.push(new CategoryRouter('/api/category'));
}

async function main() {
  const PORT = Number(Deno.env.get('SERVER_PORT')) || 8080;
  registerRouter();
  console.log(`server run at http://localhost:${PORT}`);
  const server = Deno.listen({ port: PORT });
  for await (const conn of server) {
    console.log('Conn : ', conn);
    handle(conn);
  }
}

main();
