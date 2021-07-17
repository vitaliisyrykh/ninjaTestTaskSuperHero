const http = require('http');
const app = require('./app');
const { PORT } = require('./config/configServer/index');

const server = http.createServer(app);

server.listen(PORT);