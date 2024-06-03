import { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { SPACING_2 } from '../../sx-constants/spacing'
import { COLORS } from '../../sx-constants/colors'

interface IBottomBarProps {
  children: string
}

export const BottomBar: FC<IBottomBarProps> = ({ children }) => (
  <Box
    sx={{
      backgroundColor: COLORS.appBar.bg.color,
      backgroundImage: COLORS.appBar.bg.image,
    }}
  >
    <Box
      marginTop="10dvh"
      minHeight="15dvh"
      textAlign="center"
      display="flex"
      flexDirection="column"
    >
      <Typography variant="subtitle2" marginY={SPACING_2}>
        {children}
      </Typography>
    </Box>
  </Box>
)
