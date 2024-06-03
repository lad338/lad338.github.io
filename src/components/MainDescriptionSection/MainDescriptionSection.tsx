import { FC, ReactNode } from 'react'
import { Box } from '@mui/material'
import { ContentContainer } from '../ContentContainer'

interface IMainDescriptionSectionProps {
  children: ReactNode
}

export const MainDescriptionSection: FC<IMainDescriptionSectionProps> = ({
  children,
}) => (
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
