import { FC } from 'react'
import { AboutSection } from '../../components/AboutSection'
import Typography from '@mui/material/Typography'

export const About: FC = () => (
  <AboutSection>
    <Typography variant="h4" marginBottom={5} color="text.secondary">
      About me
    </Typography>
    <Typography>Hi, I am Angus.</Typography>
    <Typography>
      Although I have a rather extensive work experience in backend development,
      I like to address myself as a Software Developer than a Backend Developer.
      I believe that having the knowledge of software development should allow
      one to build in different fields, but not limiting to one only.
    </Typography>
    <Typography>
      You may see me building stuff in different languages and frameworks. I am
      a backend developer at work, a web app and game developer at home.
    </Typography>
    <Typography display="inline">Hence, a </Typography>
    <Typography display="inline" color="primary.contrastText">
      {' Software Developer.'}
    </Typography>
  </AboutSection>
)
