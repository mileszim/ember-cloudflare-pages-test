import { drizzle } from 'drizzle-orm/d1';

export const onRequest: PagesFunction<Env> = async (context) => {
  const db = drizzle(context.env.DB);
  return new Response('Hello, world!');
};
