import * as React from 'react'
import TimelineItem from '@mui/lab/TimelineItem'
import { TimelineContent, TimelineOppositeContent } from '@mui/lab'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineDot from '@mui/lab/TimelineDot'

interface IResumeTimelineItemProps {
  oppositeContent: React.ReactNode
  icon: React.ReactNode
  content: React.ReactNode
}

export const ResumeTimelineItem = ({
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
        <TimelineContent sx={{ py: 2, px: 2 }}>{content}</TimelineContent>
      </TimelineItem>
    </div>
  )
}
