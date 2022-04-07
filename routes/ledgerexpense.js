const ledgerExpenseRouter = require('express').Router();
const ledgerExpController = require('../controllers/ledgerexpensecontroller');

//Ledger
ledgerExpenseRouter.get('/ledger', ledgerExpController.getallLedger);
ledgerExpenseRouter.post('/ledger', ledgerExpController.createledger);
ledgerExpenseRouter.put('/ledger', ledgerExpController.updateledger);

//Expense
ledgerExpenseRouter.get('/expense/ledger/:Id', ledgerExpController.getExpenseByLedgerId);
ledgerExpenseRouter.get('/expense/:Id', ledgerExpController.getExpenseById);
ledgerExpenseRouter.post('/expense', ledgerExpController.createExpense);
ledgerExpenseRouter.put('/expense', ledgerExpController.updateExpense);

module.exports = ledgerExpenseRouter;