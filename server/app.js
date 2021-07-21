const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router/index')

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/api', router)

module.exports=app;