const express = require('express');
const path = require('path');
const port = process.env.PORT;
const app = express();

app.use(express.static('client/public'));

app.listen(port);