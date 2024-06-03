import { FC, ReactNode } from 'react'
import { ContentContainer } from '../ContentContainer'
import { Box } from '@mui/material'

interface IAboutSectionProps {
  children: ReactNode
}

export const AboutSection: FC<IAboutSectionProps> = ({ children }) => {
  return (
    <ContentContainer>
      <Box
        color="grey.500"
        textAlign="left"
        margin="auto"
        maxWidth="md"
        minHeight="65dvh"
      >
        {children}
      </Box>
    </ContentContainer>
  )
}
