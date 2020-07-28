import React from 'react'
import { Alert } from 'react-bootstrap'

export default function AlertMsg({children, type}) {
  return (
  <Alert variant={type}>
    {children}
  </Alert>
  )
}
