import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export const About: React.FC = () => {
  return (
    <Box
      id="about-me-view"
      sx={{
        textAlign: 'left',
        margin: 'auto',
        width: '75vw',
        minHeight: '65vh',
      }}
    >
      <Typography variant="h4" marginBottom={5}>
        About me
      </Typography>
      <Typography>Hi, I am Angus. </Typography>
      <Typography>
        Although I have a rather extensive work experience in backend
        development, I like to address myself as a Software Developer than a
        Backend Developer. I believe that having the knowledge of software
        development should allow one to build in different fields, but not
        limiting to one only.
      </Typography>
      <Typography>
        You may see me building stuff in different languages and frameworks. I
        am a backend developer at work, a web app and game developer at home.
      </Typography>
      <Typography>Hence, a Software Developer.</Typography>
    </Box>
  )
}
