const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
require('./models');

const app = express();

const PORT = config.app.port;
const MONGO_URI = config.db.url;

app.use('/', (req, res) => res.status(200).send('Hello World'));

async function start() {
  try {
    await mongoose.connect(MONGO_URI);
    app.listen(PORT, () => console.log(`App has been started on ${PORT}...`));
  } catch (e) {
    console.log('Server error ', e.message);
    process.exit(1);
  }
}

start();
