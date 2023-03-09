import { Card } from '@mui/material'
import React, { ReactElement } from 'react'
import Box from '@mui/material/Box'

export const ResumeCard: React.FC<Props> = (props) => {
  return (
    <Box sx={{ minWidth: '75dvw', textAlign: 'left', my: 2 }}>
      <Card variant="elevation">
        <Box marginX={2} marginY={1}>
          {props.children}
        </Box>
      </Card>
    </Box>
  )
}

type Props = {
  children: ReactElement
}
