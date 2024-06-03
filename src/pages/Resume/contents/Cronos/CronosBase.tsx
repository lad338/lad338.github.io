import { FC } from 'react'
import { Typography } from '@mui/material'

export const CronosBase: FC = () => {
  return (
    <>
      <Typography variant="subtitle1" marginTop={3} color="text.primary">
        Software Developer <br />@ Cronos Labs
      </Typography>
      <Typography variant="subtitle2">Jul 2022 - Dec 2022</Typography>
      <Typography variant="body2" marginTop={3} marginBottom={3}>
        DeFi applications on Cronos chain
        <br />
        Hong Kong (Remote)
      </Typography>
    </>
  )
}
