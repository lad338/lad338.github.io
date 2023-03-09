import * as React from 'react'
import Box from '@mui/material/Box'
import { ResumeTimeline } from '../features/resume/ResumeTimeline'
import { ResumeText } from '../features/resume/ResumeText'
import { ResumeCardList } from '../features/resume/ResumeCardList'

export const Resume: React.FC = () => {
  return (
    <Box
      id="resume-view"
      sx={{
        marginBottom: '35dvh',
      }}
    >
      <ResumeText />
      <ResumeTimeline />
      <ResumeCardList />
    </Box>
  )
}
