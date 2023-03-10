import React from 'react'
import { Box, Typography } from '@mui/material'

export const BottomBar: React.FC = () => {
  return (
    <Box id="bottom-bar">
      <Box
        id="bottom-bar-container"
        minHeight="15dvw"
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
