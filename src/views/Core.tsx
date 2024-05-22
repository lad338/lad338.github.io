import * as React from 'react'
import Box from '@mui/material/Box'
import { Anchor } from '../components/Anchor'
import {
  ABOUT_ANCHOR,
  PROJECTS_ANCHOR,
  RESUME_ANCHOR,
  TOP_ANCHOR,
} from '../pages/config'

import { MainDescription } from './MainDescription'
import { About } from './About'
import { Resume } from './Resume'
import { Projects } from './Projects'

export const Core: React.FC = () => {
  return (
    <Box id="core-view">
      <Anchor anchor={TOP_ANCHOR} />
      <MainDescription />
      <Anchor anchor={ABOUT_ANCHOR} />
      <About />
      <Anchor anchor={RESUME_ANCHOR} />
      <Resume />
      <Anchor anchor={PROJECTS_ANCHOR} />
      <Projects />
    </Box>
  )
}
