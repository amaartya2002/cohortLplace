import http, { Server } from "node:http";
import { env } from "./env.js";
import { createMyApplication } from "./app/index.js";

//console.log(process.env);

async function main() {
  try {
    const server: Server = http.createServer(createMyApplication());
    //---------------------------------
    // (Yaha pe http se server banaya aur sara ka sara kaam express ko delegate kar diya by passing createMyApplication() into creatServer() function)
    //const server = http.createServer(app);
    //---------------------------------------

    //console.log(server);

    const port: number = env.PORT ? Number(env.PORT) : 8080;

    server.listen(port, () => {
      console.log(`Server listening on ${port}`);
    });
  } catch (e: any) {}
}

main();
