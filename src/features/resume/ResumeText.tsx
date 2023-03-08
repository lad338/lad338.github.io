import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import * as React from 'react'

export const ResumeText: React.FC = () => {
  return (
    <Box
      id="resume-text"
      sx={{
        textAlign: 'left',
        margin: 'auto',
        width: '75vw',
        marginBottom: 5,
      }}
    >
      <Typography variant="h4" marginBottom={5}>
        Resume
      </Typography>
      <Typography>You may download my latest resume here.</Typography>
    </Box>
  )
}
