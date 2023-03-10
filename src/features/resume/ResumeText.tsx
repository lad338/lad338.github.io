import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import * as React from 'react'
import { Link } from '@mui/material'

export const ResumeText: React.FC = () => {
  return (
    <Box
      id="resume-text"
      margin="auto"
      width="84vw"
      marginBottom={5}
      display="flex"
      flexDirection="column"
    >
      <Typography
        variant="h4"
        marginBottom={5}
        color="text.secondary"
        textAlign="center"
      >
        Resume
      </Typography>
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
    </Box>
  )
}
