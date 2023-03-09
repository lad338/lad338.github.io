import * as React from 'react'
import Box from '@mui/material/Box'
import { MainDescription } from './MainDescription'
import { About } from './About'
import { Resume } from './Resume'
import { Projects } from './Projects'
import { AppAnchor } from '../features/appBar'
import {
  ABOUT_ANCHOR,
  PROJECTS_ANCHOR,
  RESUME_ANCHOR,
  TOP_ANCHOR,
} from '../features/appBar'

export const Core: React.FC = () => {
  return (
    <Box id="core-view">
      <AppAnchor anchor={TOP_ANCHOR} />
      <MainDescription />
      <AppAnchor anchor={ABOUT_ANCHOR} />
      <About />
      <AppAnchor anchor={RESUME_ANCHOR} />
      <Resume />
      <AppAnchor anchor={PROJECTS_ANCHOR} />
      <Projects />
    </Box>
  )
}
