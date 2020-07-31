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
            <S.BurguerWrapper />
        </S.HeaderNav>
      </S.HeaderSection>
    </S.HeaderWrapper>
  );
}
