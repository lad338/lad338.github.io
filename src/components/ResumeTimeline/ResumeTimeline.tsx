import { FC } from 'react'
import Box from '@mui/material/Box'
import Timeline from '@mui/lab/Timeline'
import { ResumeTimelineItem } from '../ResumeTimelineItem'
import { ResumeContent } from '../types'

interface IResumeTimelineProps {
  contents: ResumeContent[]
}

export const ResumeTimeline: FC<IResumeTimelineProps> = ({ contents }) => (
  <Box margin="auto" display={{ xs: 'none', md: 'flex' }}>
    <Timeline>
      {contents.map(({ base, details, icon }, index) => (
        <ResumeTimelineItem
          key={`resume-${index}`}
          oppositeContent={base}
          icon={icon}
          content={details}
        />
      ))}
    </Timeline>
  </Box>
)
