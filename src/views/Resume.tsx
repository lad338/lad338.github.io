import * as React from 'react'
import Box from '@mui/material/Box'
import { ResumeTimeline, ResumeText, ResumeCardList } from '../features/resume'

export const Resume: React.FC = () => {
  return (
    <Box id="resume-view" marginBottom="25dvh">
      <ResumeText />
      <ResumeTimeline />
      <ResumeCardList />
    </Box>
  )
}
