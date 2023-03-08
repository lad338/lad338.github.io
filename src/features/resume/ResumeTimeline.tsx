import * as React from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import SchoolIcon from '@mui/icons-material/School'
import { ResumeTimelineItem } from './ResumeTimelineItem'
import { UniversityOppositeContent } from './UniversityOppositeContent'
import { UniversityContent } from './UniversityContent'
import { GTContent } from './GTContent'
import { GTOppositeContent } from './GTOppositeContent'
import TokenIcon from '@mui/icons-material/Token'
import { CDCOppositeContent } from './CDCOppositeContent'
import { CDCContent } from './CDCContent'
import { CronosOppositeContent } from './CronosOppositeContent'
import { CronosContent } from './CronosContent'

export const ResumeTimeline: React.FC = () => {
  return (
    <Timeline sx={{ width: '90vw' }}>
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
