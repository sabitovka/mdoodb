import express from 'express';

const app = express();

const PORT = 5000;

app.use('/', (req, res) => res.status(200).send('Hello World'));

async function start() {
  try {
    app.listen(PORT, () => console.log(`App has been started on ${PORT}...`));
  } catch (e) {
    console.log('Server error ', e.message);
    process.exit(1);
  }
}

start();
