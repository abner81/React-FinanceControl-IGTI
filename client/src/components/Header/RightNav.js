import React from 'react'
import * as S from "./style";

export default function RightNav({ open }) {
  return (
    <S.HeaderUl open={open}>
      <li>
        <S.HeaderLink to="/">Listagem</S.HeaderLink>
      </li>
      <li>
        <S.HeaderLink to="/novo-lancamento">Novo Lançamento</S.HeaderLink>
      </li>
    </S.HeaderUl>
  );
}
