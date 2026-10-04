'use strict';
const http = require('node:http');
const port = Number(process.env.PORT || 3000);
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  if (req.url === '/health') return res.end('ok');
  if (req.url === '/proof') return res.end(process.env.TWBB_PR_STAND_CANARY || 'NO_CANARY');
  res.end('TWBB fork branch');
}).listen(port, '0.0.0.0');
