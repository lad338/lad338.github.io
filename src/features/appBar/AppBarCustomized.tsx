import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import { AppBarMedium } from './AppBarMedium'
import { AppBarSmall } from './AppBarSmall'
import { HideOnScroll } from './HideOnScroll'

export const AppBarCustomised: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <HideOnScroll>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AppBarMedium handleCloseNavMenu={handleCloseNavMenu} />
            <AppBarSmall
              anchorElNav={anchorElNav}
              handleCloseNavMenu={handleCloseNavMenu}
              handleOpenNavMenu={handleOpenNavMenu}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  )
}
