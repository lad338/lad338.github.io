import * as React from 'react'
import { Box } from '@mui/material'
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
        <Typography>Under construction</Typography>
      </Box>
    </Box>
  )
}
