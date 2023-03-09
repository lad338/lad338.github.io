import React from 'react'
import { AppBarCustomised } from './AppBarCustomized'
import Box from '@mui/material/Box'

export const AppBarContainer: React.FC<Props> = (props) => {
  return (
    <Box className="app-bar-container">
      <>
        <AppBarCustomised />
        {props.children}
      </>
    </Box>
  )
}

type Props = {
  children: React.ReactNode
}
