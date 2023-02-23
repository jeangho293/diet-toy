import * as express from 'express';
import * as morgan from 'morgan';

const app = express();
const port = 3005;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
