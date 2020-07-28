import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import * as api from "../../api/apiService";
import * as S from "./styled";

import Alert from "./Alert";

export default function Lancamento() {
  const { register, handleSubmit, reset, errors } = useForm();

  const [fullDate, setFullDate] = useState("");
  const [dataState, setDataState] = useState({});
  const [requisitionSucess, setRequisitionSucess] = useState(null);

  const onSubmit = (data, e) => {
    e.target.reset()
    handleFormData(data);
  }

  const handleFormData = (data) => {
    setFullDate(data.date);
    setDataState(data);
  };

  useEffect(() => {
    const handleRequisitionForm = async () => {
      const separateDate = fullDate.split("-");

      const year = separateDate[0];
      const yearMonthDay = fullDate;
      const month = separateDate[1];
      const monthOneLength = parseInt(separateDate[1], 10);
      const day = parseInt(separateDate[2], 10);
      const yearMonth = `${year}-${month}`;

      const bodyRequisition = {
        year: year,
        month: monthOneLength,
        day: day,
        yearMonth: yearMonth,
        type: dataState.type,
        yearMonthDay: yearMonthDay,
        description: dataState.descricao,
        category: dataState.categoria,
        value: dataState.value,
      };

      if (bodyRequisition.yearMonthDay !== "") {
        try {
          const req = await api.createTransaction(bodyRequisition);
          console.log(req);
          setRequisitionSucess(true)

        } catch (error) {
          console.log('Ocorreu um erro na requisição')
        }
      }
    };

    handleRequisitionForm();
  }, [fullDate, dataState]);


  return (
    <S.FormWrapper className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.RadiosWrapper className="form-check">
          <S.DivInputs className="despesa" despesa>
            <input
              className="form-check-input"
              type="radio"
              name="type"
              id="exampleRadios1"
              value="-"
              ref={register({ required: true })}
            />
            <S.RadioLabel
              type="despesa"
              className="form-check-label"
              for="exampleRadios1"
            >
              Despesa
            </S.RadioLabel>
          </S.DivInputs>
          <S.DivInputs>
            <input
              className="form-check-input"
              type="radio"
              name="type"
              id="exampleRadios2"
              value="+"
              checked
              ref={register({ required: true })}
            />
            <S.RadioLabel
              type="receita"
              className="form-check-label"
              for="exampleRadios2"
            >
              Receita
            </S.RadioLabel>
          </S.DivInputs>
        </S.RadiosWrapper>

        <S.InputWrapper>
          <div className="row justify-content-center">
            <div className="col">
              <S.LabelGrid for="categoria">Categoria:</S.LabelGrid>
              <input
                type="text"
                className="form-control"
                id="categoria"
                name="categoria"
                ref={register({ required: true })}
              />
              {errors.categoria && <p>Campo obrigatório</p>}
            </div>
            <div className="col">
              <S.LabelGrid for="descricao">Descrição:</S.LabelGrid>
              <input
                type="text"
                className="form-control"
                id="descricao"
                name="descricao"
                ref={register({ required: true })}
              />
              {errors.descricao && <p>Campo obrigatório</p>}
            </div>
          </div>

          <div
            className="row justify-content-center"
            style={{ marginTop: "5px" }}
          >
            <div className="col">
              <S.LabelGrid for="value">Valor:</S.LabelGrid>
              <input
                type="number"
                className="form-control"
                id="value"
                name="value"
                ref={register({ required: true })}
              />
              {errors.value && <p>Campo obrigatório</p>}
            </div>
            <div className="col">
              <S.LabelGrid for="date">Data:</S.LabelGrid>
              <input
                type="date"
                className="form-control"
                id="date"
                name="date"
                ref={register({ required: true })}
              />
              {errors.date && <p>Campo obrigatório</p>}
            </div>
          </div>
          <S.SubmitDiv>
            <input type="submit" class="btn btn-primary" />
          </S.SubmitDiv>
        </S.InputWrapper>
      </form>
      {requisitionSucess === true && (
        setInterval(() => {
          return <Alert type="success">Transação adicionada com sucesso!</Alert>
    }, 50)
      )}
      {requisitionSucess === false && (
        <Alert type="danger">Erro ao adicionar a transação...</Alert>
        
      )}
    </S.FormWrapper>
  );
}
