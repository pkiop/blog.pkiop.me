import Router from '../lib/Router/index.ts';
import type { Headers } from '../lib/Router/index.ts';
import BodyParser from '../lib/BodyParser/index.ts';

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
  async POST(req: Deno.RequestEvent) {
    const headers: Headers = {
      'content-type': 'application/json',
    };
    const data = req.request.body;
    if (!data) throw new Error('no body');
    const parsedBody = await BodyParser.parse(data);
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
