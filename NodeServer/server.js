const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PouchDB = require('pouchdb');
const db = new PouchDB('http://localhost:5984/some');
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
require('./app/routes')(app, db);
app.listen(port, () => {
    console.log('We are live on ' + port);
});



