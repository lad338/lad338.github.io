import * as React from 'react'
import { Box } from '@mui/material'
import { ProjectsText, ProjectsCardList } from '../features/projects'

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
