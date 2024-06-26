import { FC } from 'react'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { PageType } from '../types'

interface ISmallProps {
  anchorElNav: null | HTMLElement
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void
  handleCloseNavMenu: () => void
  pages: PageType[]
  children: string
}

export const AppBarSM: FC<ISmallProps> = ({
  anchorElNav,
  handleOpenNavMenu,
  handleCloseNavMenu,
  pages,
  children,
}) => (
  <>
    <Box position="relative" display={{ xs: 'fixed', sm: 'none' }}>
      <IconButton
        size="large"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', sm: 'none' },
        }}
      >
        {pages.map((page) => (
          <MenuItem
            component="a"
            key={page.anchor}
            href={'#' + page.anchor}
            onClick={handleCloseNavMenu}
          >
            <Typography textAlign="center">{page.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
    <Typography
      variant="h5"
      display="inline"
      color="text.secondary"
      noWrap
      component="a"
      href="/"
      sx={{
        margin: 'auto',
        display: { xs: 'block', sm: 'none' },
      }}
    >
      {children}
    </Typography>
  </>
)
