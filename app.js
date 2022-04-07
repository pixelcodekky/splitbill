const bp = require('body-parser');
const express = require('express');

const app = express();

app.use(bp.json());
app.use(bp.urlencoded({extended: true}));

app.use(require('cors')());

//Register Router

const friendRouter = require('./routes/friend');
const ledgerexpenseRouter = require('./routes/ledgerexpense');

//routers
app.use('/api/friend', friendRouter);
app.use('/api', ledgerexpenseRouter);

module.exports = app;