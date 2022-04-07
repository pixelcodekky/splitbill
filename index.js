require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE,{
    useUnifiedTopology: true,
    useNewUrlParser: true
});

mongoose.connection.on('error',(err) => {
    console.log(err.message);
})

mongoose.connection.on('open', () => {
    console.log('Database Connected');
});

//Register Model
require('./Models/Friend');
require('./Models/Ledger');
require('./Models/Expense');

const app = require('./app');

const server = app.listen(process.env.PORT, () => {
    console.log('Server listing on ', process.env.PORT);
})