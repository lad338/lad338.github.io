import React from 'react'
import { Typography } from '@mui/material'

export const CDCContent: React.FC = () => {
  return (
    <>
      <Typography>
        Maintained user authentication and authorization APIs of over 70 million
        users
      </Typography>
      <Typography>
        Implemented antispam mechanism using Google Recaptcha and rate limit
        handling using Redis
      </Typography>
      <Typography>
        Developed an authentication and authorization microservice using Golang
        that acted as a source of truth for user identities across different
        platforms in the Crypto.com ecosystem
      </Typography>
      <Typography>
        Designed the database schema of the auth microservice in CockroachDB for
        its scaling in multiple geolocation and Postgres compatibility
      </Typography>
      <Typography>
        Developed a backup login service for Crypto.com Exchange in Ruby on
        Rails for server downtime
      </Typography>
    </>
  )
}
