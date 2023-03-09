import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import * as React from 'react'
import { Link } from '@mui/material'

export const MainDescriptionText: React.FC = () => {
  return (
    <Box
      id="main-description-text"
      sx={{
        margin: 'auto',
        width: '84vw',
        textAlign: 'left',
        color: 'grey.500',
      }}
    >
      <Typography
        variant="h1"
        color="text.secondary"
        display="inline"
        lineHeight="100%"
      >
        {'$ '}
      </Typography>
      <Typography
        variant="h1"
        color="primary.contrastText"
        display="inline"
        lineHeight="100%"
      >
        Hi, I am
      </Typography>
      <Typography variant="h2" color="primary.contrastText" lineHeight="110%">
        ANGUS DICKY LI,
      </Typography>
      <Typography variant="h3" lineHeight="110%">
        a SOFTWARE DEVELOPER
      </Typography>
      <Typography>
        who recently moved to Toronto, Canada from Hong Kong.
      </Typography>
      <Typography>
        I am currently open for any Canadian developer opportunities.
      </Typography>
      <Typography>
        Learn more about me over{' '}
        <Link color="text.secondary" underline="none" href="#about">
          here
        </Link>
        .
      </Typography>
      <Typography>
        You may also check out my{' '}
        <Link color="text.secondary" underline="none" href="#resume">
          resume
        </Link>{' '}
        or my{' '}
        <Link color="text.secondary" underline="none" href="#projects">
          projects
        </Link>
        .
      </Typography>
    </Box>
  )
}
