import React from "react";
import { useForm } from "react-hook-form";

import * as S from "./styled";

export default function Lancamento() {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  /* const handleDatePicker = (event) => {
    const date = event.target.value;
    const splitDate = date.split("-");
    console.log(splitDate);
  }; */

  const handleRequisitionForm = (event) => {
    /* const date = event.target.value;
    const splitDate = date.split("-");
    console.log(splitDate); */
  };

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
            <input type="submit" class="btn btn-primary" onClick={handleRequisitionForm}/>
          </S.SubmitDiv>
        </S.InputWrapper>
      </form>
    </S.FormWrapper>
  );
}
