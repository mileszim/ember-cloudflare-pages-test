import { drizzle } from 'drizzle-orm/d1';
import { posts } from '../../drizzle/schema';

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const db = drizzle(context.env.DB);
  const allPosts = await db.select().from(posts);
  return new Response(JSON.stringify(allPosts));
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const db = drizzle(context.env.DB);
  return new Response('Hello, world!');
};
