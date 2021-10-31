const express = require('express');
const routes = require('./src/index');
const mongoose = require('mongoose');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const mongoURL = "mongodb://kishore:Sc6dgrMJKCbKbu3n@cluster0-shard-00-00.reynt.mongodb.net:27017,cluster0-shard-00-01.reynt.mongodb.net:27017,cluster0-shard-00-02.reynt.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-97jtlv-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose
  .connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('MongoDB successfully connected'))
  .catch((err) => console.log(err));

/**
 GET, POST, PUT, DELETE
 */

 app.use('/', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`[INFO] Server started on PORT ${PORT}`));