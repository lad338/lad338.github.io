import { Card } from '@mui/material'
import React, { ReactElement } from 'react'
import Box from '@mui/material/Box'

export const CardFrame: React.FC<Props> = (props) => {
  return (
    <Box minWidth="75dvw" textAlign="left" marginY={2}>
      <Card variant="elevation" sx={{ borderRadius: 7 }}>
        <Box marginX={2} marginY={2}>
          {props.children}
        </Box>
      </Card>
    </Box>
  )
}

type Props = {
  children: ReactElement
}
