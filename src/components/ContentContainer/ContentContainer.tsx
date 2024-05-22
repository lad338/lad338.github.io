import React from 'react'
import { Container } from '@mui/material'

interface IContentContainerProps {
  children: JSX.Element
}

export const ContentContainer: React.FC<IContentContainerProps> = ({
  children,
}) => {
  return <Container maxWidth="xl"> {children} </Container>
}
