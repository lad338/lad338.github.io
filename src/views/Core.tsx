import * as React from 'react'
import Box from '@mui/material/Box'
import { MainDescription } from './MainDescription'
import { About } from './About'
import { Resume } from './Resume'
import { Projects } from './Projects'

export const Core: React.FC = () => {
  return (
    <Box id="core-view">
      <MainDescription />
      <About />
      <Resume />
      <Projects />
    </Box>
  )
}
