const mongoose = require("mongoose");
const TransactionModel = require("../models/TransactionModel");

const getAllTransactions = async (req, res) => {
  const period = req.query.period;
  try {
    if (!period)
      res
        .status(400)
        .send({
          error:
            "É necessário informar o parâmetro (period), cujo valor deve estar no formato yyyy-mm",
        }); 

    const req = await TransactionModel.find({ yearMonth: period });
      res.send(req)
  } catch (error) {
    res
      .status(400)
      .send({ message: "Erro ao buscar as transações!", type: error });
  }
};

const updatebyId = async (req, res) => {
  const id = req.params.id
  const body = req.body;
  try {
    if (!id)
      res.status(400).send({
        error:
          "Para atualizar a transação é necessário informar o parâmetro (id)."
      });

      const req = await TransactionModel.updateOne({ _id: id }, body)
      res.send('Atualização feita com sucesso!');
  } catch (error) {
    res
      .status(400)
      .send({ message: "Erro ao atualizar a transação!", type: error });
  }
};

const deleteById = async (req, res) => {
  const id = req.params.id
  try {
    await TransactionModel.findByIdAndDelete(id);
    res.send('Transação exluída com sucesso!')
  } catch (error) {
    res
      .status(400)
      .send({ message: "Erro ao excluir a transação!", type: error });
  }
};

const postTransaction = async (req, res) => {
  const body = req.body
  try {
   const req = await TransactionModel.create(body)
   res.send({message: 'Transação criada com sucesso!', result: req})
  } catch (error) {
    res
      .status(400)
      .send({ message: "Erro ao incluir a transação!", type: error });
  }
};

module.exports = {
  getAllTransactions,
  updatebyId,
  deleteById,
  postTransaction,
};
