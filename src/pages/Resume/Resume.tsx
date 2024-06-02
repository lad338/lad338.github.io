import { ResumeSection } from '../../components/ResumeSection'
import { RESUME_CONTENTS } from './contents'
import { Link } from '@mui/material'
import Typography from '@mui/material/Typography'
import * as React from 'react'

export const Resume = () => (
  <ResumeSection
    title={'Resume'}
    textContent={
      <Typography color="grey.500" textAlign="center">
        You may also download my latest resume{' '}
        <Link
          href="/angus-resume-20230309.pdf"
          target="_blank"
          underline="none"
          color="text.secondary"
        >
          here
        </Link>
        .
      </Typography>
    }
    contents={RESUME_CONTENTS}
  />
)
