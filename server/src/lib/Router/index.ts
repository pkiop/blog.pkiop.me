import debug from '../Debug/index.ts';
export type HttpContentType = 'text/html' | 'application/json';
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
export interface Headers {
  'content-type': HttpContentType;
  [index: string]: string;
}
abstract class Router {
  protected req: Deno.RequestEvent | null;
  protected route: string[];
  protected method: HttpMethod | null;

  constructor(expectedRoute: string) {
    this.req = null;
    this.method = null;
    this.route = expectedRoute.split('/');
  }

  protected abstract GET(req: Deno.RequestEvent): void;
  protected abstract POST(req: Deno.RequestEvent): void;
  protected abstract PUT(): void;
  protected abstract DELETE(): void;

  setRequest(req: Deno.RequestEvent) {
    this.req = req;
    this.method = req.request.method as HttpMethod;
  }

  private clearRequest() {
    this.req = null;
    this.method = null;
  }

  compareRoute(route: string[]): boolean {
    if (this.route.length !== route.length) return false;
    for (let i = 0; i < route.length; ++i) {
      if (this.route[i][0] === ':') continue;
      if (this.route[i] !== route[i]) return false;
    }
    return true;
  }

  run() {
    if (!this.req) throw new Error('NO REQUEST');
    switch (this.method) {
      case 'GET':
        this.GET(this.req);
        break;
      case 'POST':
        this.POST(this.req);
        break;
      case 'PUT':
        this.PUT();
        break;
      case 'DELETE':
        this.DELETE();
        break;
      default:
        throw new Error(
          `Unsupported http method. Method name is : ${this.method}`
        );
    }
    this.clearRequest();
  }
}

export default Router;
