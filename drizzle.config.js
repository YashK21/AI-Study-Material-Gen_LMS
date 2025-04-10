import { defineConfig } from "drizzle-kit";
import dotnev from "dotenv";
dotnev.config({
  path: ".env.local",
});
export default defineConfig({
  dialect: "postgresql",
  schema: "./dbConfigs/schema.js",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABASE_CONNECTION_STRING,
  },
});
