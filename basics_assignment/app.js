const http = require('http');
const fs = require('fs');
const routes = require('./route');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/users') {
    res.write('<html>');
    res.write('<head><title>Users</title><head>');
    res.write('<body><li>User 1 </li></body>');
    res.write('</html>');
    return res.end();

  }
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');

    res.write('<html>');
    res.write('<head><title>Welcome</title><head>');
    res.write('<body><h1>Welcome To Node Bootcamp </h1></body>');
    res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();

  }

  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      console.log(message);
      fs.writeFile('message.txt', message, err => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
});

server.listen(2020);