import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { ResumeTimeline } from '../components/ResumeTimeline'

export const Resume: React.FC = () => {
  return (
    <Box
      id="resume-view"
      sx={{
        margin: 'auto',
        marginBottom: '35dvh',
      }}
    >
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
      <ResumeTimeline />
    </Box>
  )
}
