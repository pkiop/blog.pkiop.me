class Debug {
  private env;
  constructor(env?: string) {
    this.env = env || 'development';
  }

  log(...message: unknown[]): void {
    if (this.env !== 'prod') {
      console.log(...(message || ''));
    }
  }
}

export default new Debug(Deno.env.get('ENV'));
