import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use('/', routes);

app.get('/', (req, res) => {
  res.send('Hello my api server!');
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
