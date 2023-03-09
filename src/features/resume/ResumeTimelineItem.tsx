import * as React from 'react'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import { TimelineContent, TimelineOppositeContent } from '@mui/lab'

export const ResumeTimelineItem = (props: Props) => {
  return (
    <div className="resume-item-container">
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2">
          {props.oppositeContent}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>{props.icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          {props.content}
        </TimelineContent>
      </TimelineItem>
    </div>
  )
}

type Props = {
  oppositeContent: React.ReactNode
  icon: React.ReactNode
  content: React.ReactNode
}
