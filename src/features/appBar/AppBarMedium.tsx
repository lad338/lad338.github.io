import * as React from 'react'
import AdbIcon from '@mui/icons-material/Adb'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { PAGES } from './pages'

export const AppBarMedium: React.FC<Props> = (props) => {
  return (
    <>
      <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        Home
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {PAGES.map((page) => (
          <Button
            key={page.anchor}
            href={'#' + page.anchor}
            onClick={props.handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            {page.label}
          </Button>
        ))}
      </Box>
    </>
  )
}

type Props = {
  handleCloseNavMenu: () => void
}
