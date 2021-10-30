import Router from '../lib/Router/index.ts';
import type { Headers } from '../lib/Router/index.ts';

class CategoryRouter extends Router {
  constructor(expectedRoute: string) {
    super(expectedRoute);
  }

  GET(req: Deno.RequestEvent) {
    const headers: Headers = {
      'content-type': 'text/html',
    };
    req.respondWith(
      new Response('get category', {
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
      new Response('post category', {
        status: 200,
        headers,
      })
    );
  }
  PUT() {}
  DELETE() {}
}

export default CategoryRouter;
