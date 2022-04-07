const mongoose = require('mongoose');

const LedgerSchema = new mongoose.Schema({
    ledgerName: {
        type:String,
        require:'Name Require'
    },
    comments:{
        type:String,
    }
},{
    timestamps: true
});

module.exports = mongoose.model('ledger',LedgerSchema);