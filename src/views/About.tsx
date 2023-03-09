import * as React from 'react'
import Box from '@mui/material/Box'
import { AboutText } from '../features/about/AboutText'

export const About: React.FC = () => {
  return (
    <Box
      id="about-me-view"
      sx={{
        minHeight: '65dvh',
      }}
    >
      <AboutText />
    </Box>
  )
}
