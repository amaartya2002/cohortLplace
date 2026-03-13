import http, { Server } from "node:http";
import { env } from "./env.js";

//console.log(process.env);

async function main() {
  try {
    const server: Server = http.createServer();
    const port: number = env.PORT ? Number(env.PORT) : 8080;

    server.listen(port, () => {
      console.log(`Server listening on ${port}`);
    });
  } catch (e: any) {}
}

main();
