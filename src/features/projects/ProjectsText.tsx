import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import * as React from 'react'

export const ProjectsText: React.FC = () => {
  return (
    <Box
      id="projects-text"
      sx={{
        textAlign: 'left',
        margin: 'auto',
        width: '84vw',
      }}
    >
      <Typography variant="h4" marginBottom={5} color="text.secondary">
        Projects
      </Typography>
      <Typography color="grey.500" marginBottom={3}>
        Here are some projects I have created:
      </Typography>
    </Box>
  )
}
