import * as React from 'react'
import { AppBar as MuiAppBar } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'

import { PageType } from '../types'
import { HideOnScroll } from '../HideOnScroll'
import { IIconsProps } from './Icons'
import { AppBarSM } from './AppBarSM'
import { AppBarMD } from './AppBarMD'
import { ContentContainer } from '../ContentContainer'

interface IAppBarProps {
  icons: React.ReactElement<IIconsProps>[]
  pages: PageType[]
  smCenterButtonText: string
  mdHomeButtonText: string
}

export const AppBar: React.FC<IAppBarProps> = ({
  icons,
  pages,
  smCenterButtonText,
  mdHomeButtonText,
}) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <HideOnScroll>
      <MuiAppBar position="fixed">
        <ContentContainer>
          <Toolbar disableGutters>
            <AppBarSM
              anchorElNav={anchorElNav}
              handleCloseNavMenu={handleCloseNavMenu}
              handleOpenNavMenu={handleOpenNavMenu}
              pages={pages}
            >
              {smCenterButtonText}
            </AppBarSM>
            <AppBarMD handleCloseNavMenu={handleCloseNavMenu} pages={pages}>
              {mdHomeButtonText}
            </AppBarMD>
            {icons}
          </Toolbar>
        </ContentContainer>
      </MuiAppBar>
    </HideOnScroll>
  )
}
