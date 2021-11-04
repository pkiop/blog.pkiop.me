import { Client } from 'https://deno.land/x/mysql/mod.ts';
import 'https://deno.land/x/dotenv/load.ts';

type MysqlClient = any;

export default abstract class Model {
  protected dbClient: MysqlClient;
  constructor() {
    this.connection();
  }

  private async connection() {
    this.dbClient = await new Client().connect({
      hostname: Deno.env.get('MYSQL_HOSTNAME'),
      username: Deno.env.get('MYSQL_USERNAME'),
      password: Deno.env.get('MYSQL_PASSWORD'),
      db: Deno.env.get('MYSQL_DBNAME'),
    });
    this.dbClient.execute(`CREATE DATABASE IF NOT EXISTS TEST`);
  }

  public abstract reload(): void; // get full data on db
}
