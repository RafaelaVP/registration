const express = require('express');
const router = require('./routes/index');
require('./app/config/config');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    router(this.server);
  }
}

module.exports = new App().server;