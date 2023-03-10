import React from 'react'
import { Box, Chip, Typography } from '@mui/material'

export const ProjectDetail: React.FC<ProjectDetailProps> = (props) => {
  return (
    <Box>
      <Box>
        <ul>
          {props.detail.map((it) => {
            return (
              <li>
                <Typography variant="body1" color="grey.500">
                  {it}
                </Typography>
              </li>
            )
          })}
        </ul>
      </Box>
      <Box>
        {props.tags.map((tag) => {
          return <Chip label={tag} sx={{ mx: 1 }} />
        })}
      </Box>
    </Box>
  )
}

export type ProjectDetailProps = {
  detail: string[]
  tags: string[]
}
