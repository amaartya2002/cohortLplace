// to tell this is my application code like what library i am using (express,bun,fastapi...etc) => app folder was created

//making a wrapper for this

import express, { type Application } from "express";

export function createMyApplication(): Application {
  const app = express();

  //#region // *========================= ROUTES ====================================

  app.get("/hello", (req, res) => {
    res.send(`Hellooo jiii`);
  });

  app.get("/", (req, res) => {
    res.send(`Hellooo hahahah`);
  });
  //#endregion //

  return app;
}
