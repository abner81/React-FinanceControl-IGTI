const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate");
let schema = mongoose.Schema({
  description: String,
  value: Number,
  category: String,
  year: Number,
  month: Number,
  day: Number,
  yearMonth: String,
  yearMonthDay: String,
  type: String,
});

schema.plugin(mongoosePaginate);

const TransactionModel = mongoose.model('transaction', schema);

module.exports = TransactionModel;
