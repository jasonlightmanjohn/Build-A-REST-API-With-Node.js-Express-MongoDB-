require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI, { useUnifiedTopology: true, useNewUrlParser: true  } )

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', function() {
    console.log('Connected to Database')
  });

app.use(express.json())

app.listen(3000, () => console.log('server started'));