import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './drizzle/schema.ts',
  out: './drizzle/migrations',
  dialect: 'sqlite',
  driver: 'd1-http',
  dbCredentials: {
    accountId: process.env['CLOUDFLARE_ACCOUNT_ID']!,
    databaseId: process.env['CLOUDFLARE_DATABASE_ID']!,
    token: process.env['CLOUDFLARE_D1_TOKEN']!,
  },
});