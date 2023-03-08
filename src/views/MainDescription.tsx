import * as React from 'react'
import Box from '@mui/material/Box'
import { MainDescriptionText } from '../features/mainDescription/MainDescriptionText'

export const MainDescription: React.FC = () => {
  return (
    <Box
      id="main-description-view"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100dvh',
      }}
    >
      <MainDescriptionText />
    </Box>
  )
}
