import * as React from 'react'
import { MainDescriptionSection } from '../../components/MainDescriptionSection'
import Typography from '@mui/material/Typography'
import { Link } from '@mui/material'

export const MainDescription: React.FC = () => {
  return (
    <MainDescriptionSection>
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
    </MainDescriptionSection>
  )
}
