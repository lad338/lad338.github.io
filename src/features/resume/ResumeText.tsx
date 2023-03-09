import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import * as React from 'react'

export const ResumeText: React.FC = () => {
  return (
    <Box
      id="resume-text"
      sx={{
        margin: 'auto',
        width: '84vw',
        marginBottom: 5,
      }}
    >
      <Typography variant="h4" marginBottom={5} color="text.secondary">
        Resume
      </Typography>
      <Typography color="grey.500">
        You may also download my latest resume here.
      </Typography>
    </Box>
  )
}
