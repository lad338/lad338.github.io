import React from 'react'
import { Typography } from '@mui/material'

export const CDCBase: React.FC = () => {
  return (
    <>
      <Typography variant="subtitle1" marginTop={3} color="text.primary">
        Software Developer <br />@ Crypto.com
      </Typography>
      <Typography variant="subtitle2">Jun 2021 - Jan 2023</Typography>
      <Typography variant="body2" marginTop={3} marginBottom={3}>
        Crypto Wallet & Exchange
        <br />
        Hong Kong (Remote)
      </Typography>
    </>
  )
}
