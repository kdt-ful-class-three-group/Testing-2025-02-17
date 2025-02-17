import http from "http"
import fs from "fs"

const port = 3000

const server = http.createServer(function(req, res) {
  console.log("req URL : " + req.url);
  if(req.method === "GET") {
    if(req.url === "/") {
      const indexPage = fs.readFileSync('index.html', 'utf-8');
      res.writeHead(200, { 'Content-Type': 'utf-8; text/html'});
      res.write(indexPage);
      res.end();
    }
  }
  if(req.method === "POST") {
    console.log("in post url")
    if(req.url === "/form") {
      console.log("in form url");
      const page = fs.readFileSync("./index.html");
      res.writeHead(200, {"Content-Type" : "text/html"});
      res.write(page);
      res.end();
    }
  }
})

server.listen(port, () => {
  console.log(`서버 구동 중 (http://localhost:${port})`);
})
