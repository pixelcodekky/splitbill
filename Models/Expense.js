const mongoose = require('mongoose');

const ExpenseSchema = mongoose.Schema({
    ledgerId:{
        type: mongoose.Schema.Types.ObjectId,
        require: 'Ledger Link Require'
    },
    expenseName:{
        type: String,
        require: 'Name Require'
    },
    paidBy: {
        type: mongoose.Schema.Types.ObjectId,
        require: 'Paid By require'
    },
    paidAmount:{
        type:mongoose.Schema.Types.Number,
        require: 'Require'
    },
    expenseItem: [{
        personName: {
            type: String,
            require: 'Person Name require'
        },
        personId: {
            type: mongoose.Schema.Types.ObjectId,
            require: 'Object ID require'
        },
        shareAmount:{
            type:mongoose.Schema.Types.Number,
            require:'Amount require'
        }
    }]
},{
    timestamps: true
});

module.exports = mongoose.model('expense', ExpenseSchema);