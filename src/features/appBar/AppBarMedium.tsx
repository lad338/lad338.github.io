import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { PAGES } from './pages'
import { SxProps } from '@mui/system'
import { Typography } from '@mui/material'

const buttonStyle: SxProps = {
  my: 2,
  display: 'block',
}

export const AppBarMedium: React.FC<Props> = (props) => {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
        <Button href={'/'} sx={buttonStyle}>
          <Typography variant="h5" color="text.secondary">
            Home
          </Typography>
        </Button>

        {PAGES.map((page) => (
          <Button
            key={page.anchor}
            href={'#' + page.anchor}
            onClick={props.handleCloseNavMenu}
            sx={buttonStyle}
          >
            <Typography variant="h5" color="primary.contrastText">
              {page.label}
            </Typography>
          </Button>
        ))}
      </Box>
    </>
  )
}

type Props = {
  handleCloseNavMenu: () => void
}
