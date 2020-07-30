import React from 'react'
import { StyledBurger, DivBurguer } from "./styled";

export default function index() {
  return (
    <DivBurguer className="container">
      <StyledBurger className="on">
        <div />
        <div />
        <div />
      </StyledBurger>
    </DivBurguer>
  );
}
