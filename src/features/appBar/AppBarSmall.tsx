import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { PAGES } from './pages'

export const AppBarSmall: React.FC<Props> = (props) => {
  return (
    <>
      <Box sx={{ position: 'relative', display: { xs: 'fixed', sm: 'none' } }}>
        <IconButton
          size="large"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={props.handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={props.anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(props.anchorElNav)}
          onClose={props.handleCloseNavMenu}
          sx={{
            display: { xs: 'block', sm: 'none' },
          }}
        >
          {PAGES.map((page) => (
            <MenuItem
              component="a"
              key={page.anchor}
              href={'#' + page.anchor}
              onClick={props.handleCloseNavMenu}
            >
              <Typography textAlign="center">{page.label}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Typography
        variant="h5"
        noWrap
        component="a"
        href="/"
        sx={{
          margin: 'auto',
          display: { xs: 'block', sm: 'none' },
        }}
      >
        Angus Li
      </Typography>
    </>
  )
}

type Props = {
  anchorElNav: null | HTMLElement
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void
  handleCloseNavMenu: () => void
}
