import React from 'react'
import Box from '@mui/material/Box'
import { ResumeCard } from './ResumeCard'
import { CDCOppositeContent } from './CDCOppositeContent'
import { CDCContent } from './CDCContent'
import { CronosOppositeContent } from './CronosOppositeContent'
import { CronosContent } from './CronosContent'
import { GTOppositeContent } from './GTOppositeContent'
import { GTContent } from './GTContent'
import { UniversityOppositeContent } from './UniversityOppositeContent'
import { UniversityContent } from './UniversityContent'

export const ResumeCardList: React.FC = () => {
  return (
    <Box
      sx={{ width: '96vw', margin: 'auto' }}
      display={{ xs: 'flex', md: 'none' }}
      flexDirection="column"
    >
      <ResumeCard
        children={
          <>
            <CDCOppositeContent />
            <CDCContent />
          </>
        }
      />
      <ResumeCard
        children={
          <>
            <CronosOppositeContent />
            <CronosContent />
          </>
        }
      />
      <ResumeCard
        children={
          <>
            <GTOppositeContent />
            <GTContent />
          </>
        }
      />
      <ResumeCard
        children={
          <>
            <UniversityOppositeContent />
            <UniversityContent />
          </>
        }
      />
    </Box>
  )
}
