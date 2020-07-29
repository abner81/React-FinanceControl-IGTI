import React from 'react'
import styled from 'styled-components'

import { Alert } from 'react-bootstrap'

export default function AlertMsg({children, type}) {
  return (
    <AlertWrapper
      className="alert-dismissible fade show"
      role="alert"
      variant={type}
    >
      {children}
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
      &times;
      </button>
    </AlertWrapper>
  );
}

const AlertWrapper = styled(Alert)`
  display:flex;
  align-items: center;
`
