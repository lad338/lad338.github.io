import React from 'react'
import { Container } from '@mui/material'

interface IContentContainerProps {
  children: React.ReactNode
}

export const ContentContainer: React.FC<IContentContainerProps> = ({
  children,
}) => {
  return <Container maxWidth="xl"> {children} </Container>
}
