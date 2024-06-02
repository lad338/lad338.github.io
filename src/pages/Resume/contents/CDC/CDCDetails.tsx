import React from 'react'
import { Typography } from '@mui/material'

export const CDCDetails: React.FC = () => {
  return (
    <>
      <Typography variant="body2" marginTop={5} marginBottom={2}>
        Maintained user authentication and authorization APIs of over 70 million
        users.
      </Typography>
      <Typography variant="body2" marginBottom={2}>
        Implemented antispam mechanism using Google Recaptcha and rate limit
        handling using Redis.
      </Typography>
      <Typography variant="body2" marginBottom={2}>
        Developed an authentication and authorization microservice using Golang
        that acted as a source of truth for user identities across different
        platforms in the Crypto.com ecosystem.
      </Typography>
      <Typography variant="body2" marginBottom={2}>
        Designed the database schema of the auth microservice in CockroachDB for
        its scaling in multiple geolocation and Postgres compatibility.
      </Typography>
      <Typography variant="body2" marginBottom={5}>
        Developed a backup login service for Crypto.com Exchange in Ruby on
        Rails for server downtime.
      </Typography>
    </>
  )
}
