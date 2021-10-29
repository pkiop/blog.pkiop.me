export type HttpContentType = 'text/html' | 'application/json';
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

abstract class Router {
  protected req: Deno.RequestEvent | null;
  protected route: string[];
  protected method: HttpMethod | null;

  constructor(expectedRoute: string) {
    this.req = null;
    this.method = null;
    this.route = expectedRoute.split('/');
  }

  abstract GET(responseData: BodyInit, type: HttpContentType): void;
  abstract POST(responseData: BodyInit, type: HttpContentType): void;
  abstract PUT(): void;
  abstract DELETE(): void;

  abstract compareRoute(route: string[]): boolean;

  setRequest(req: Deno.RequestEvent) {
    this.req = req;
    this.method = req.request.method as HttpMethod;
  }

  clearRequest() {
    this.req = null;
    this.method = null;
  }

  run() {
    switch (this.method) {
      case 'GET':
        this.GET('get hello', 'text/html');
        break;
      case 'POST':
        this.POST('post hello', 'application/json');
        break;
      case 'PUT':
        break;
      case 'DELETE':
        break;
      default:
        throw new Error(
          `Unsupported http method. Method name is : ${this.method}`
        );
    }
    // this.req.
  }
}

export default Router;
