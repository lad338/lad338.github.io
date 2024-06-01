import React from 'react'

import Box from '@mui/material/Box'
import { BottomBar } from '../BottomBar'
import { AppBar, IIconsProps } from '../AppBar'
import { PageType } from '../types'

interface IAppBarContainerProps {
  children: React.ReactNode
  bottomText: string
  pages: PageType[]
  appBarIcons: React.ReactElement<IIconsProps>[]
  appBarSmCenterButtonText: string
  appBarMdHomeButtonText: string
}

export const AppBarContainer: React.FC<IAppBarContainerProps> = ({
  children,
  bottomText,
  appBarIcons,
  appBarSmCenterButtonText,
  appBarMdHomeButtonText,
  pages,
}) => {
  return (
    <Box>
      <AppBar
        icons={appBarIcons}
        smCenterButtonText={appBarSmCenterButtonText}
        mdHomeButtonText={appBarMdHomeButtonText}
        pages={pages}
      />
      {children}
      <BottomBar>{bottomText}</BottomBar>
    </Box>
  )
}