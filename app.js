import http from 'http';
import fs from 'fs';

const server = http.createServer(function(request, response) {
  if(request.method === "GET") {
    if(request.url === "/") {
      const indexPage = fs.readFileSync('index.html', 'utf-8');
      response.writeHead(200, { 'Content-Type': 'utf-8; text/html'});
      response.write(indexPage);
      response.end();
    }
  }
});

server.listen(3000, function() {
  console.log("http://localhost:3000 서버 가동중 입니다.");
});