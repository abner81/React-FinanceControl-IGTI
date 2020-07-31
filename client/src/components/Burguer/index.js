import React, { useState } from 'react'
import RightNav from '../Header/RightNav'

import { StyledBurger } from "./styled";

export default function Burguer() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurger className="on" open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open}/>
    </>
  );
}
