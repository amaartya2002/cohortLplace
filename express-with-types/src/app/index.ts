// to tell this is my application code like what library i am using (express,bun,fastapi...etc) => app folder was created

//making a wrapper for this

import express, { type Application } from "express";

export function createMyApplication(): Application {
  const app = express();

  app.get("/hello", (req, res) => {
    res.send(`Hellooo jiii`);
  });

  return app;
}
