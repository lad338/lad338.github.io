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
        width: '75vw',
      }}
    >
      <Typography variant="h4" marginBottom={5}>
        Projects
      </Typography>
      <Typography>Here are some projects I have created:</Typography>
    </Box>
  )
}
