import { makeExecutableSchema, GraphQLHTTP } from '../../../deps.ts';
import { typeDefs, resolvers } from '../../../graphql/index.ts';

export async function graphQLSender(
  requestEvent: Deno.RequestEvent,
  url: string[]
) {
  if (url[1] !== 'graphql') return false;
  try {
    const res = await GraphQLHTTP<Request>({
      schema: makeExecutableSchema({ resolvers, typeDefs }),
      graphiql: true,
    })(requestEvent.request);
    await requestEvent.respondWith(res);
  } catch (err) {
    await requestEvent.respondWith(
      new Response(`GraphQL ERROR : ${err}`, { status: 500 })
    );
    console.error(err);
  }
  return true;
}
