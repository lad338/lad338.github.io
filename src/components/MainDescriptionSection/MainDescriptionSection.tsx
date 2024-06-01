import * as React from 'react'
import { Box } from '@mui/material'
import { ContentContainer } from '../ContentContainer'

interface IMainDescriptionSectionProps {
  children: React.ReactNode
}

export const MainDescriptionSection: React.FC<IMainDescriptionSectionProps> = ({
  children,
}) => {
  return (
    <ContentContainer>
      <Box
        color="grey.500"
        display="flex"
        flexDirection="column"
        margin="auto"
        maxWidth="xl"
        minHeight="100dvh"
      >
        <Box margin="auto">{children}</Box>
      </Box>
    </ContentContainer>
  )
}
