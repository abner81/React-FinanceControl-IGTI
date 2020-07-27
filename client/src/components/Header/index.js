import React from 'react'

import * as S from './style'

export default function index() {
  return (
    <S.HeaderWrapper>
      <S.HeaderSection className="container">
        <a href="/#" style={{ textDecoration: "none" }}>
          <S.HeaderLogo>
            Finance<S.HeaderLogoTwo>App</S.HeaderLogoTwo>
          </S.HeaderLogo>
        </a>
        <S.HeaderNav>
          <S.HeaderUl>
            <li>
              <S.HeaderLink to="/">Listagem</S.HeaderLink>
            </li>
            <li>
              <S.HeaderLink to="/novo-lancamento">Novo Lançamento</S.HeaderLink>
            </li>
          </S.HeaderUl>
        </S.HeaderNav>
      </S.HeaderSection>
    </S.HeaderWrapper>
  );
}
