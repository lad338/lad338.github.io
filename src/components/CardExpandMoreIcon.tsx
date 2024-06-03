import { styled } from '@mui/material/styles'
import { IconButton, IconButtonProps } from '@mui/material'
import { FC } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

interface ExpandMoreProps extends IconButtonProps {
  isExpanded: boolean
}

export const CardExpandMoreIcon = styled((props: ExpandMoreProps) => {
  const { isExpanded, children, ...other } = props
  return <IconButton children={children || <ExpandMoreIcon />} {...other} />
})(({ theme, isExpanded }) => ({
  transform: !isExpanded ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))
