import * as express from 'express';
import * as morgan from 'morgan';
import { globalRouter } from './routes';

const app = express();
const port = 3005;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use(globalRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
