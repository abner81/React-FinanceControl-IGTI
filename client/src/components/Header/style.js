import styled from "styled-components";
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
`;

export const HeaderNav = styled.nav``;

export const HeaderUl = styled.ul`
  display: flex;
  align-items: center;
  color: white;
  flex-direction: row;
`;

export const HeaderLi = styled.li`
  text-decoration: none;
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
`;
