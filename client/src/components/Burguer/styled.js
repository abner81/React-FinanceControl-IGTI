import styled from "styled-components";
import media from "styled-media-query";

export const StyledBurger = styled.button`
  display: none;

  &:focus {
    outline: none;
  }

  ${media.lessThan("769px")`
           display: flex;
         flex-direction: column;
         justify-content: space-around;
         width: 2rem;
         height: 2rem;
         background: transparent;
         border: none;
         cursor: pointer;
         padding: 0;
         position: relative;
         right: 20px;
         z-index: 20;
  `}

  div {
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const DivBurguer = styled.div``;
