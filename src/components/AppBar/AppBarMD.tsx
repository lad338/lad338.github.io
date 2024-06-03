import { FC } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'
import { SxProps } from '@mui/system'

import { PageType } from '../types'

import { SPACING_2 } from '../../sx-constants/spacing'

interface IAppBarMDProps {
  handleCloseNavMenu: () => void
  pages: PageType[]
  children: string
}

const buttonStyle: SxProps = {
  my: SPACING_2,
  display: 'block',
}

export const AppBarMD: FC<IAppBarMDProps> = ({
  pages,
  children,
  handleCloseNavMenu,
}) => (
  <>
    <Box flexGrow={1} display={{ xs: 'none', sm: 'flex' }}>
      <Button href={'/'} sx={buttonStyle}>
        <Typography variant="h5" color="text.secondary">
          {children}
        </Typography>
      </Button>

      {pages.map((page) => (
        <Button
          key={page.anchor}
          href={'#' + page.anchor}
          onClick={handleCloseNavMenu}
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
