import React from 'react'
import { GlobalStyles } from './components/styles/GlobalStyles'

import Header from './components/Header/index'
import Lancamento from './components/Lancamento'

export default function NovoLancamento() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Lancamento />
    </>
  )
}
