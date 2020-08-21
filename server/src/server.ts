import express from 'express';

const app: express.Application = express();

const PORT = process.env.port || 5000

app.get('/', (req, res) => {
  res.send('Server is running')
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}!`);
});
 