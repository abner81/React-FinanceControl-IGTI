import React from "react";

import styled from "styled-components";
import { ArrowToTop } from "@styled-icons/boxicons-solid/ArrowToTop";

export default function index() {
  return (
    <IconWrapper
      onClick={() =>
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      }
    >
      <IconTop />
    </IconWrapper>
  );
}

const IconWrapper = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #4652c5;
  padding: 5px 5px;
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 20px; /* Place the button 30px from the right */
  transition-duration: 5s;
  scroll-behavior: smooth;

  &:hover {
    width: 40px;
    height: 40px;
    box-shadow: 0px 0px 10px -3px #000000;
    transition-delay: 0.1s;
  }
`;

const IconTop = styled(ArrowToTop)`
  font-size: 1.5rem;
  color: white;
`;
