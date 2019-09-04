const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');

app.use(morgan('dev'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

const PORT = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});