import React from 'react'
import Box from '@mui/material/Box'
import { CardFrame } from '../../components/CardFrame'
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
      <CardFrame
        children={
          <>
            <CDCOppositeContent />
            <CDCContent />
          </>
        }
      />
      <CardFrame
        children={
          <>
            <CronosOppositeContent />
            <CronosContent />
          </>
        }
      />
      <CardFrame
        children={
          <>
            <GTOppositeContent />
            <GTContent />
          </>
        }
      />
      <CardFrame
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
