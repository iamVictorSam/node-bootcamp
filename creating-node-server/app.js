const http = require('http');

function rqListener(req, res) {
  console.log(req);
}

http.createServer(rqListener);