// to tell this is my application code like what library i am using (express,bun,fastapi...etc) => app folder was created

//making a wrapper for this

import express, { type Application } from "express";

export function createMyServer(): Application {
  const app = express();
  return app;
}
