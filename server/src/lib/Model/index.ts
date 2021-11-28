import { Client } from 'https://deno.land/x/mysql/mod.ts';
import 'https://deno.land/x/dotenv/load.ts';

type MysqlClient = any;

export default abstract class Model {
  protected dbClient: MysqlClient | null;
  constructor() {
    this.connection();
  }

  private async connection() {
    this.dbClient = null;
    this.dbClient = await new Client().connect({
      hostname: Deno.env.get('MYSQL_HOSTNAME'),
      username: Deno.env.get('MYSQL_USERNAME'),
      password: Deno.env.get('MYSQL_PASSWORD'),
      db: Deno.env.get('MYSQL_DBNAME'),
    });
  }

  protected async query(sql: string, params: any[] = []) {
    if (!this.dbClient) throw new Error('NOT CONNECTED');
    return this.dbClient.execute(sql, params);
  }

  public abstract reload(): void; // get full data on db
}
