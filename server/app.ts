import http from "http";
import { App, PORT, MONGO_URI, IS_DEV_MODE } from "./config/expressSetup";

const server = http.createServer(new App().app);
server.listen(PORT);

server.on("listening", () => {
  console.log("Connection stablished successfully");
});
