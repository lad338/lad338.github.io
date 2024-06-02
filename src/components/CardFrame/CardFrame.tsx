import React from 'react'
import Box from '@mui/material/Box'
import { Card } from '@mui/material'
import { SPACING_2 } from '../../sx-constants/spacing'

interface ICardFrameProps {
  children: React.ReactNode
}

export const CardFrame: React.FC<ICardFrameProps> = ({ children }) => {
  return (
    <Box width="100%" textAlign="left" marginY={SPACING_2}>
      <Card variant="elevation" sx={{ borderRadius: 7 }}>
        <Box margin={SPACING_2}>{children}</Box>
      </Card>
    </Box>
  )
}
