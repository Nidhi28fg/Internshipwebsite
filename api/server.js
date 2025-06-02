const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(process.cwd(), 'db.json'));
const middlewares = jsonServer.defaults();

const cors = require('cors');
server.use(cors());

server.use(middlewares);

server.use(jsonServer.rewriter({
  '/api/*': '/$1'
}));

server.use(router);
module.exports = server;