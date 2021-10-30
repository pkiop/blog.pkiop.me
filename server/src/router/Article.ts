import Router from '../lib/Router/index.ts';
import type { Headers } from '../lib/Router/index.ts';

class ArticleRouter extends Router {
  constructor(expectedRoute: string) {
    super(expectedRoute);
  }

  GET(req: Deno.RequestEvent) {
    const headers: Headers = {
      'content-type': 'text/html',
    };
    req.respondWith(
      new Response('get text', {
        status: 200,
        headers,
      })
    );
  }
  POST(req: Deno.RequestEvent) {
    const headers: Headers = {
      'content-type': 'application/json',
    };
    req.respondWith(
      new Response('post test', {
        status: 200,
        headers,
      })
    );
  }
  PUT() {}
  DELETE() {}
}

export default ArticleRouter;
