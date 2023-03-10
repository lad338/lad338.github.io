import React from 'react'
import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'
import { ICONS } from './icons'
import { IconButton } from '@mui/material'

const iconStyle: SxProps = {
  m: 'auto',
  display: 'flex',
}
export const AppBarRightIcons: React.FC = () => {
  return (
    <Box display="flex" flexDirection="row" position="relative" right={0.1}>
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
