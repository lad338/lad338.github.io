import { FC, ReactNode } from 'react'
import { SPACING_4 } from '../../sx-constants/spacing'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface IProjectsTextProps {
  title: string
  children: ReactNode
}

export const ProjectsText: FC<IProjectsTextProps> = ({ title, children }) => (
  <Box margin="auto" marginBottom={SPACING_4}>
    <Typography variant="h4" marginBottom={SPACING_4} color="text.secondary">
      {title}
    </Typography>
    {children}
  </Box>
)
