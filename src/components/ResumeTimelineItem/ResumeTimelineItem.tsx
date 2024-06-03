import { FC, ReactNode } from 'react'
import TimelineItem from '@mui/lab/TimelineItem'
import { TimelineContent, TimelineOppositeContent } from '@mui/lab'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineDot from '@mui/lab/TimelineDot'
import { SPACING_2 } from '../../sx-constants/spacing'

interface IResumeTimelineItemProps {
  oppositeContent: ReactNode
  icon: ReactNode
  content: ReactNode
}

export const ResumeTimelineItem: FC<IResumeTimelineItemProps> = ({
  content,
  icon,
  oppositeContent,
}: IResumeTimelineItemProps) => {
  return (
    <div className="resume-item-container">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0', color: 'grey.500' }}
          variant="body2"
        >
          {oppositeContent}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ padding: SPACING_2 }}>{content}</TimelineContent>
      </TimelineItem>
    </div>
  )
}
