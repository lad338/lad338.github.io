import { FC, ReactNode } from 'react'
import { Container } from '@mui/material'

interface IContentContainerProps {
  children: ReactNode
}

export const ContentContainer: FC<IContentContainerProps> = ({ children }) => (
  <Container maxWidth="xl"> {children} </Container>
)
