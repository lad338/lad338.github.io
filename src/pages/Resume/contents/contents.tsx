import { HKUBase, HKUDetails } from './HKU'
import * as React from 'react'
import SchoolIcon from '@mui/icons-material/School'
import { GTBase, GTDetails } from './GT'
import { CDCBase, CDCDetails } from './CDC'
import { CronosBase, CronosDetails } from './Cronos'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import TokenIcon from '@mui/icons-material/Token'
import { ResumeContent } from '../../../components/types'

export const RESUME_CONTENTS: ResumeContent[] = [
  {
    base: <CronosBase />,
    details: <CronosDetails />,
    icon: <TokenIcon />,
  },
  {
    base: <CDCBase />,
    details: <CDCDetails />,
    icon: <TokenIcon />,
  },
  {
    base: <GTBase />,
    details: <GTDetails />,
    icon: <PowerSettingsNewIcon />,
  },
  {
    base: <HKUBase />,
    details: <HKUDetails />,
    icon: <SchoolIcon />,
  },
]
