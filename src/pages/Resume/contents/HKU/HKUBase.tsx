import Typography from '@mui/material/Typography'
import { FC } from 'react'

export const HKUBase: FC = () => (
  <>
    <Typography variant="body2" marginTop={3}>
      Graduated from
    </Typography>
    <Typography variant="subtitle1" color="text.primary">
      The University of Hong Kong
    </Typography>
    <Typography variant="subtitle2" marginBottom={3}>
      Bachelor of Engineering
      <br />
      Majoring in Computer Science
      <br />
      June 2018
    </Typography>
  </>
)
