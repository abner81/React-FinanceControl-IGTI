import React from "react";
import * as S from "./styled";
import Card from "./Card";
import formatNumber from "../../helpers/FormatNumber";

export default function index({ state }) {
  const filterDespesas = state.filter(
    (transaction) => transaction.type === "-"
  );
  const resDespesas = filterDespesas.reduce((acc, curr) => acc + curr.value, 0);

  const filterReceitas = state.filter(
    (transaction) => transaction.type === "+"
  );
  const resReceitas = filterReceitas.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <S.DashboardWrapper className="container">
      <Card
        title="Nº de Lançamentos"
        value={state.length}
        iconNumber
        background="white"
        fontColor="black"
      />
      <Card
        title="Despesas"
        value={formatNumber(resDespesas)}
        iconDown
        background="white"
        fontColor="black"
      />
      <Card
        title="Receitas"
        value={formatNumber(resReceitas)}
        iconUp
        background="white"
        fontColor="black"
      />
      <Card
        att="saldo"
        title="Saldo"
        value={formatNumber(resReceitas - resDespesas)}
        iconMoney
        fontColor="white"
        background={resReceitas - resDespesas >= 0 ? "#2A9D8F" : "#f47859"}
      />
    </S.DashboardWrapper>
  );
}
