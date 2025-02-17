import http from "http"
import fs from "fs"

const port = 3000

const server = http.createServer(function(req, res) {
  console.log("request URL : " + req.url);
  if(req.method === "post") {
    console.log("in post url")
    if(req.url === "/form") {
      console.log("in form url");
      const page = fs.readFileSync("./index.html");
      res.setHeader(200, {"Content-Type" : "application/html"});
      res.write(page);
      res.end();
    }
  }
})

server.listen(port, () => {
  console.log(`서버 구동 중 (http://localhost:${port})`);
})