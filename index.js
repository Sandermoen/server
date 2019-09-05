const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/auth', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true); // Prevent deprecation warning

const connection = mongoose.connection;

connection.on('connected', function() {
  console.log('connected to db');
});

app.use(morgan('dev'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

const PORT = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
