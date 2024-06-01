import React from 'react'
import { ContentContainer } from '../ContentContainer'
import { Box } from '@mui/material'

interface IAboutSectionProps {
  children: React.ReactNode
}

export const AboutSection: React.FC<IAboutSectionProps> = ({ children }) => {
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
