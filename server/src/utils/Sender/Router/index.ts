import Router from '../../../lib/Router/index.ts';

export function routerSender(
  requestEvent: Deno.RequestEvent,
  registeredRouterList: Router[],
  url: string[]
) {
  const router = registeredRouterList.find((router) =>
    router.compareRoute(url)
  );
  if (router) {
    router.setRequest(requestEvent);
    router.run();
    return true;
  }
  false;
}
