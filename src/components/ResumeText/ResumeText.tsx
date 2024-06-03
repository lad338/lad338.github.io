import { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { SPACING_4 } from '../../sx-constants/spacing'

interface IResumeTextProps {
  title: string
  children: ReactNode
}

export const ResumeText: FC<IResumeTextProps> = ({ title, children }) => {
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
      {children}
    </Box>
  )
}
