import * as React from 'react'
import { Box } from '@mui/material'
import { ProjectsText } from '../features/projects/ProjectsText'
import Typography from '@mui/material/Typography'

export const Projects: React.FC = () => {
  return (
    <Box
      id="projects-view"
      sx={{
        margin: 'auto',
        minHeight: '100vh',
      }}
    >
      <ProjectsText />
      <Typography variant="h3" align="center">
        Under construction
      </Typography>
    </Box>
  )
}
