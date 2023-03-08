import React from 'react'
import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'
import { ICONS } from './icons'
import { IconButton } from '@mui/material'

const iconStyle: SxProps = {
  mx: 1,
  my: 2,
  display: 'block',
}
export const AppBarRightIcons: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      {ICONS.map((icon) => {
        return (
          <IconButton
            id={icon.id}
            key={icon.id}
            sx={iconStyle}
            href={icon.href}
            target="_blank"
          >
            {icon.icon}
          </IconButton>
        )
      })}
    </Box>
  )
}
