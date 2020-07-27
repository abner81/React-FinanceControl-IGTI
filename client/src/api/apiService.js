import axios from "axios";

const baseURL = "http://localhost:3001/api/transaction/";

export const getAllTransactions = async (periodState) => {
  const req = await axios.get(
    `${baseURL}?period=${periodState}`
  );
  const res = req.data
  return res
}

export const updateModalTransaction = async (body, id) => {
  const req = await axios.put(
    `${baseURL}update/${id}`, body
  );
  return req.data
}

export const deleteTransactionByiD = async (id) => {
  const req = await axios.delete(
    `${baseURL}delete/${id}`
  );
  return req.data
}

