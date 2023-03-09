import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import * as React from 'react'

export const ProjectsText: React.FC = () => {
  return (
    <Box id="projects-text" margin="auto" width="84vw" marginBottom={5}>
      <Typography variant="h4" marginBottom={5} color="text.secondary">
        Projects
      </Typography>
      <Typography color="grey.500">
        Here are some projects I have created:
      </Typography>
    </Box>
  )
}
