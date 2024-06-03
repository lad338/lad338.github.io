import { FC } from 'react'
import Box from '@mui/material/Box'
import { CardFrame } from '../CardFrame'
import { ResumeContent } from '../types'

interface IResumeCardSectionProps {
  contents: ResumeContent[]
}

export const ResumeCards: FC<IResumeCardSectionProps> = ({ contents }) => (
  <Box
    margin="auto"
    display={{ xs: 'flex', md: 'none' }}
    flexDirection="column"
  >
    {contents.map(({ base, details }, index) => (
      <CardFrame key={`resume-${index}`}>
        {base}
        {details}
      </CardFrame>
    ))}
  </Box>
)
