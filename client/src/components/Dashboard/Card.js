import React from "react";
import * as S from "./styled";

const Card = ({
  title,
  value,
  iconNumber,
  iconMoney,
  iconUp,
  iconDown,
  fontColor,
  background,
  att
}) => (
  <S.DashboardCard background={background} className={att} >
    <S.DashboardDivTitle>
      <S.DashboardCardTitle background={background}>{title}</S.DashboardCardTitle>
    {iconNumber && <S.IconNumber />} {iconMoney && <S.IconMoney />}
    {iconDown && <S.IconDownCircle />} {iconUp && <S.IconUpCircle />}
    </S.DashboardDivTitle>
    <S.DashboardCardNumber fontColor={fontColor}>{value}</S.DashboardCardNumber>
  </S.DashboardCard>
);

export default Card;
