import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export const MainDescription: React.FC = () => {
  return (
    <Box
      id="main-description"
      sx={{
        textAlign: 'left',
        margin: 'auto',
        width: '75vw',
        minHeight: '75vh',
        marginTop: '50%',
      }}
    >
      <Typography variant="h1">$ Hi, I am</Typography>
      <Typography variant="h2">ANGUS DICKY LI,</Typography>
      <Typography variant="h3">A SOFTWARE DEVELOPER</Typography>
      <Typography>
        who recently moved to Toronto, Canada from Hong Kong.
      </Typography>
      <Typography>
        I am currently open for any Canadian developer opportunities.
      </Typography>
    </Box>
  )
}
