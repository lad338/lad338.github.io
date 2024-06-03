import { FC } from 'react'
import { Typography } from '@mui/material'

export const CronosDetails: FC = () => {
  return (
    <>
      <Typography variant="body2" marginTop={5} marginBottom={2}>
        Worked in CronosID, a DeFi name service in the Cronos chain.
      </Typography>
      <Typography variant="body2" marginBottom={2}>
        Worked on metadata service and subgraph in TypeScript with Node.js.
      </Typography>
      <Typography variant="body2" marginBottom={2}>
        Worked in DeFi exchange team to develop price candle chart APIs in Go
        with expected of thousands of requests per second.
      </Typography>
      <Typography variant="body2" marginBottom={5}>
        Developed CI/CD pipelines for unit test and deployment using CircleCI.
      </Typography>
    </>
  )
}
