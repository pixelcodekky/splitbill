const mongoose = require('mongoose');
const Expense = mongoose.model('expense');
const Ledger = mongoose.model('ledger');

exports.getallLedger = async (req, res) => {
    const ledgers = await Ledger.find({});
    return res.status(200).json(ledgers);
}

exports.createledger = async (req,res) => {
    try {
        
        const {ledgerName, comments} = req.body;

        const ledgerExist = await Ledger.findOne({ledgerName});
        if(ledgerExist){
            return res.status(400).json('Ledger Name Already Exist');
        }

        const newLedger = new Ledger({ledgerName, comments});
        const createdLedger = await newLedger.save();

        return res.status(201).json(createdLedger);

    } catch (error) {
        return res.status(400).json(error);
    }
}

exports.updateledger = async (req,res) => {
    try {
       
        const {_id,ledgerName, comments} = req.body;

        const filter = {_id};
        const DeltaDate = {ledgerName, comments};

        const updatedData = await Ledger.findByIdAndUpdate(filter,DeltaDate,{
            new: true
        });

        return res.status(200).json(updatedData);

    } catch (error) {
        return res.status(400).json(error);
    }
}

exports.getExpenseByLedgerId = async (req,res) => {
    try {
        const {Id} = req.params;

        const filterExpense = await Expense.find({ledgerId: Id});

        return res.status(200).json(filterExpense);

    } catch (error) {
        return res.status(400).json(error);
    }
}

exports.getExpenseById = async (req,res) => {
    try {
        const {Id} = req.params;

        const filterExpense = await Expense.findById({_id:Id});

        return res.status(200).json(filterExpense);

    } catch (error) {
        return res.status(400).json(error);
    }
}

exports.createExpense = async (req,res) => {
    try {
        const postData = req.body;

        const checkName = await Expense.findOne({expenseName: postData.expenseName});
        if(checkName){
            return res.status(400).json('Name Already Exit');
        }

        const newExpense = new Expense(postData);
        const createdExpense = await newExpense.save();

        return res.status(200).json(createdExpense);

    } catch (error) {
        return res.status(400).json(error);
    }
}

exports.updateExpense = async (req, res) => {
    try {
        const putData = req.body;

        const filter = {_id};
        
        const updatedData = await Expense.findByIdAndUpdate(filter,putData,{
            new:true
        });

        return res.status(200).json(updatedData);

    } catch (error) {
        res.status(400).json(error);
    }
}