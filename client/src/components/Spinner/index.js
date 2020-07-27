import React from "react";
import styled from "styled-components";

export default function index() {
  return (
    <DivCenter className="d-flex align-items-center">
      <div className="spinner-border text-primary" role="status" />
      <Span>Carregando notas...</Span>
    </DivCenter>
  );
}

const DivCenter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const Span = styled.span`
  margin-left: 10px;
  font-size: 1.8rem;
`;
