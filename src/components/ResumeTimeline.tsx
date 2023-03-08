import * as React from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import SchoolIcon from '@mui/icons-material/School'
import { ResumeTimelineItem } from './ResumeTimelineItem'
import { UniversityOppositeContent } from '../features/resume/UniversityOppositeContent'
import { UniversityContent } from '../features/resume/UniversityContent'
import { GTContent } from '../features/resume/GTContent'
import { GTOppositeContent } from '../features/resume/GTOppositeContent'
import TokenIcon from '@mui/icons-material/Token'
import { CDCOppositeContent } from '../features/resume/CDCOppositeContent'
import { CDCContent } from '../features/resume/CDCContent'
import { CronosOppositeContent } from '../features/resume/CronosOppositeContent'
import { CronosContent } from '../features/resume/CronosContent'

export const ResumeTimeline: React.FC = () => {
  return (
    <Timeline sx={{ width: '98vw' }}>
      <ResumeTimelineItem
        oppositeContent={<UniversityOppositeContent />}
        content={<UniversityContent />}
        icon={<SchoolIcon />}
      />
      <ResumeTimelineItem
        oppositeContent={<GTOppositeContent />}
        icon={<PowerSettingsNewIcon />}
        content={<GTContent />}
      />
      <ResumeTimelineItem
        oppositeContent={<CDCOppositeContent />}
        icon={<TokenIcon />}
        content={<CDCContent />}
      />
      <ResumeTimelineItem
        oppositeContent={<CronosOppositeContent />}
        icon={<TokenIcon />}
        content={<CronosContent />}
      />
      {/*<ResumeTimelineItem oppositeContent={} icon={} content={}/>*/}
    </Timeline>
  )
}
