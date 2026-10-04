'use strict';
const http = require('node:http');
const port = Number(process.env.PORT || 3000);
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(req.url === '/health' ? 'ok' : 'TWBB owner baseline');
}).listen(port, '0.0.0.0');
