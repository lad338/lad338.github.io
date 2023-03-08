import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { ResumeTimeline } from '../components/ResumeTimeline'

export const Resume: React.FC = () => {
  return (
    <Box
      id="resume-view"
      sx={{
        textAlign: 'left',
        margin: 'auto',
        minHeight: '65vh',
      }}
    >
      <Box
        id="resume-text"
        sx={{
          margin: 'auto',
          width: '75vw',
        }}
      >
        <Typography variant="h4" marginBottom={5}>
          Resume
        </Typography>
        <Typography>
          You may download my latest resume here, but I'd rather suggest you to
          enjoy the web presentation.
        </Typography>
      </Box>
      <ResumeTimeline />
    </Box>
  )
}
