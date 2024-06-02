import { styled } from '@mui/material/styles'
import { IconButton, IconButtonProps } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

export const ExpandMoreIconButton = styled((props: ExpandMoreProps) => {
  const { expand, children, ...other } = props
  return <IconButton children={children || <ExpandMoreIcon />} {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))
