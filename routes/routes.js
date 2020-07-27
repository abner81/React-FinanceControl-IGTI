const express = require('express');
const transactionRouter = express.Router();
const service = require('../services/transactionService')

transactionRouter.get("/", service.getAllTransactions);
transactionRouter.put('/update/:id',service.updatebyId)
transactionRouter.post('/create', service.postTransaction)
transactionRouter.delete('/delete/:id', service.deleteById)

module.exports = transactionRouter;
