import axios from "axios";

const baseURL = "http://192.168.15.3:3001/api/transaction/";

export const getAllTransactions = async (periodState, pageNumber, nPerPage) => {
  const req = await axios.get(
    `${baseURL}?period=${periodState}`,
    {
      headers: {
        pagenumber: pageNumber,
        nperpage: nPerPage,
      },
    }
  );
  const res = req.data;
  return res;
};

export const updateModalTransaction = async (body, id) => {
  const req = await axios.put(`${baseURL}update/${id}`, body);
  return req.data;
};

export const deleteTransactionByiD = async (id) => {
  const req = await axios.delete(`${baseURL}delete/${id}`);
  return req.data;
};

export const createTransaction = async (body) => {
  const req = await axios.post(`${baseURL}create`, body);
  return req.data;
};
