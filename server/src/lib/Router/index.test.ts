import { assertEquals } from 'https://deno.land/std@0.113.0/testing/asserts.ts';
import Router from './index.ts';

class TestRouter extends Router {
  constructor(expectedRoute: string) {
    super(expectedRoute);
  }

  GET(req: Deno.RequestEvent) {}
  POST(req: Deno.RequestEvent) {}
  PUT() {}
  DELETE() {}
}

Deno.test('router compareRouter test #1', () => {
  const testRouter = new TestRouter('/test/123');
  assertEquals(true, testRouter.compareRoute('/test/123'.split('/')));
});

Deno.test('router compareRouter test #2', () => {
  const testRouter = new TestRouter('/test/123');
  assertEquals(false, testRouter.compareRoute('/test/1234'.split('/')));
});
