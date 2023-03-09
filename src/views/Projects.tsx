import * as React from 'react'
import { Box } from '@mui/material'
import { ProjectsText } from '../features/projects/ProjectsText'
import { ProjectsCardList } from '../features/projects/ProjectsCardList'

export const Projects: React.FC = () => {
  return (
    <Box
      id="projects-view"
      margin="auto"
      minHeight="100dvh"
      marginBottom="25dvh"
    >
      <ProjectsText />
      <ProjectsCardList />
    </Box>
  )
}
