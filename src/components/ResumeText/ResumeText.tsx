import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { SPACING_4 } from '../../sx-constants/spacing'

interface IResumeTextProps {
  title: string
  content: React.ReactNode
}

export const ResumeText: React.FC<IResumeTextProps> = ({ title, content }) => {
  return (
    <Box
      margin="auto"
      marginBottom={SPACING_4}
      display="flex"
      flexDirection="column"
    >
      <Typography
        variant="h4"
        marginBottom={SPACING_4}
        color="text.secondary"
        textAlign="center"
      >
        {title}
      </Typography>
      {content}
    </Box>
  )
}
