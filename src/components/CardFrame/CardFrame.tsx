import { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import { Card } from '@mui/material'
import { SPACING_1, SPACING_2 } from '../../sx-constants/spacing'

interface ICardFrameProps {
  children: ReactNode
}

export const CardFrame: FC<ICardFrameProps> = ({ children }) => {
  return (
    <Box width="100%" textAlign="left" marginY={SPACING_2}>
      <Card variant="elevation" sx={{ borderRadius: 8, padding: SPACING_1 }}>
        <Box margin={SPACING_2}>{children}</Box>
      </Card>
    </Box>
  )
}
