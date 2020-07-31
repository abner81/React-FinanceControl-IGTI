import styled from "styled-components";
import media from "styled-media-query";

import Burguer from "../Burguer/index";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  background-color: #4652c5;
  width: 100%;
  min-height: 200px;
`;

export const HeaderLogo = styled.h1`
  font-size: 2.3rem;
  font-weight: 700;
  line-height: 49px;
  color: #f47859;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const HeaderLogoTwo = styled.h2`
  font-size: 2.3rem;
  font-weight: 300;
  line-height: 49px;
  color: #fff;
`;

export const HeaderSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 20px 0 0;

  ${media.lessThan("600px")`
           width: 90%;
           margin: 0 auto;
  `}
`;

export const HeaderNav = styled.nav``;

export const HeaderUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: white;
  flex-flow: row nowrap;

  ${media.lessThan("medium")`
           flex-flow: column nowrap;
           background-color: #4652c5;
           overflow: hidden;
           position: fixed;
           align-items: center;
           justify-content: center;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 10;
          
           transition: transform 0.3s ease-in-out;
  `}
`;

export const HeaderLi = styled.li`
  text-decoration: none;

  ${media.lessThan("medium")`
    padding: 200px;

  `}
`;

export const HeaderLink = styled(Link)`
         font-size: 1.2rem;
         margin-left: 25px;
         text-decoration: none;
         color: white;

         &:hover {
           border-bottom: 2px solid #f47859;
           box-sizing: border-box;
           padding: 0 0 10px 0;
           text-decoration: none;
           color: white;
         }

         ${media.lessThan("medium")`
    font-size: 2rem;
    margin-bottom: 30px;
    display: block;

    &::before {
      content: '</>  ';
      color: '#ccc';
    }
  `}
       `;

export const BurguerWrapper = styled(Burguer)``;
