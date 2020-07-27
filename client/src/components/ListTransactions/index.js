import React, { useState } from "react";

import * as api from '../../api/apiService'
import formatNumber from "../../helpers/FormatNumber";
import ModalComponent from "./Modal";

import * as S from "./styled";

export default function ListTransaction({
  category,
  description,
  value,
  type,
  day,
  index,
  date,
  id,
  apiRefresh
}) {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleDeleteTransaction = async () => {
    await api.deleteTransactionByiD(id)
    apiRefresh()
  }

  const handleApiRefresh = () => {
    apiRefresh()
  }

  return (
    <S.ListWrapper className="container">
      <S.ListLeftDiv>
        <S.ListDay>{day.toString().padStart(2, "0")}</S.ListDay>
        <S.ListInfoDiv>
          <S.ListCategory>{category}</S.ListCategory>
          <S.ListDescription>{description}</S.ListDescription>
        </S.ListInfoDiv>
      </S.ListLeftDiv>
      <S.ListRigthDiv>
        <S.ListPrice type={type}>{formatNumber(value)}</S.ListPrice>
        <S.ListButtonModal variant="primary" onClick={handleShowModal}>
          <S.ListIconPencil />
        </S.ListButtonModal>
        <ModalComponent
          state={showModal}
          handleClose={handleCloseModal}
          index={index}
          category={category}
          description={description}
          value={value}
          date={date}
          id={id}
          type={type}
          apiRefresh={handleApiRefresh}
        />
        <S.ListButtonModal onClick={handleDeleteTransaction}>
          <S.ListIconDelete />
        </S.ListButtonModal>
      </S.ListRigthDiv>
    </S.ListWrapper>
  );
}
