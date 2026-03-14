import http from "http";
import { character } from "./character.js";

const server = http.createServer((req, res) => {
  if (req.url === "/characters") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(character));
  }
});

server.listen(3000, () => {
  console.log("Server is running at port: 3000");
});
