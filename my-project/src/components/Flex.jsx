import React from 'react'
import Container from './Container'

const Flex = ({children, className}) => {
  return (
    <div className={`flex ${className}`}>{children}</div>
  )
}

export default Flex