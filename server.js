import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import config from './config';
import BookProducts from './Controllers/BookProducts';


const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).catch((error) => console.log(error.reason));


const app = express();
app.use(bodyParser.json());


app.use('/api/products', BookProducts);





app.listen(config.PORT, () => { console.log('Server started at http://localhost:5000'); });
