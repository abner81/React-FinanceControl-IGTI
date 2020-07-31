import React from "react";
import { useForm } from "react-hook-form";

import * as api from '../../api/apiService'
import { Modal } from "react-bootstrap";

import * as S from "./styled";

const ModalComponent = ({
  state,
  handleClose,
  index,
  category,
  date,
  id,
  description,
  value,
  type,
  apiRefresh
}) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => handleSubmitRequisition(data);

   const handleSubmitRequisition = async (data) => {
    const fullDate = data.yearMonthDay;
    const separateDate = fullDate.split('-')

    const year = separateDate[0]
    const month = separateDate[1]
    const monthOneLength = parseInt(separateDate[1], 10)
    const day = parseInt(separateDate[2], 10)
    const yearMonth = `${year}-${month}`

    const bodyRequisition = {
      year: year,
      month: monthOneLength,
      day: day,
      yearMonth: yearMonth,
      type: type,
      id: id,
      ...data
    };
    apiRefresh()

    const req = await api.updateModalTransaction(bodyRequisition, id);
    return req
  }

  return (
    <S.ModalWrapper
      show={state}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Edição de lançamento</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <S.ModalLabel>Descrição:</S.ModalLabel>
          <input
            type="text"
            className="form-control input"
            name="description"
            size="20"
            defaultValue={description}
            ref={register({ required: true })}
          />
          {errors.description && <S.P>Campo obrigatório</S.P>}
          <S.ModalLabel>Categoria:</S.ModalLabel>
          <input
            type="text"
            className="form-control input"
            size="20"
            defaultValue={category}
            name="category"
            ref={register({ required: true })}
          />
          {errors.category && <S.P>Campo obrigatório</S.P>}
          <div class="row">
            <div class="col-12 col-md-6">
              <S.ModalLabel>Valor:</S.ModalLabel>
              <input
                type="number"
                step="0.01"
                size="20"
                className="input form-control"
                defaultValue={value}
                name="value"
                ref={register({ required: true })}
              />
              {errors.value && <S.P>Campo obrigatório</S.P>}
            </div>
            <div class="col-12 col-md-6">
              <S.ModalLabel>Data:</S.ModalLabel>
              <input
                type="date"
                className="form-control input"
                id="date"
                size="20"
                defaultValue={date}
                name="yearMonthDay"
                ref={register({ required: true })}
              />
              {errors.yearMonthDay && <S.P>Campo obrigatório</S.P>}
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <button
            type="button"
            className="btn btn-secondary footerText"
            onClick={handleClose}
          >
            Cancelar
          </button>
          <input
            type="submit"
            className="btn btn-primary footerText"
            value="Salvar"
            onClick={handleClose}
          />
        </Modal.Footer>
      </form>
    </S.ModalWrapper>
  );
};

export default ModalComponent;
