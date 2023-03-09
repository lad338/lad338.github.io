import * as React from 'react'
import Timeline from '@mui/lab/Timeline'
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
import Box from '@mui/material/Box'

export const ResumeTimeline: React.FC = () => {
  return (
    <Box
      sx={{ width: '94vw', margin: 'auto' }}
      display={{ xs: 'none', md: 'flex' }}
    >
      <Timeline>
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
    </Box>
  )
}
