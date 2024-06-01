import React from 'react'
import { Box, Typography } from '@mui/material'
import { COLORS } from '../../sx-constants/colors'

export const BottomBar: React.FC = () => {
  return (
    <Box
      id="bottom-bar"
      sx={{
        backgroundColor: COLORS.appBar.bg.color,
        backgroundImage: COLORS.appBar.bg.image,
      }}
    >
      <Box
        id="bottom-bar-container"
        minHeight="15dvh"
        textAlign="center"
        display="flex"
        flexDirection="column"
      >
        <Typography variant="subtitle2" marginY={2}>
          Created by Angus, 2023
        </Typography>
      </Box>
    </Box>
  )
}