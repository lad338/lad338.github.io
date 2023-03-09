import React, { ReactNode } from 'react'
import Box from '@mui/material/Box'
import { CardContent, CardMedia } from '@mui/material'
import { CardFrame } from '../../components/CardFrame'
import Typography from '@mui/material/Typography'

export const ProjectCardFrame: React.FC<Props> = (props) => {
  const cardContent = (
    <CardContent
      className="project-description-container"
      sx={{
        marginLeft: 1,
        marginY: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box marginY="auto">
        <Typography variant="subtitle1" marginY={2} color="text.secondary">
          {props.title}
        </Typography>
        {props.content}
      </Box>
    </CardContent>
  )

  return (
    <CardFrame
      children={
        <>
          <Box
            display={{ xs: 'none', sm: 'flex' }}
            minHeight={500}
            flexDirection="row"
          >
            <CardMedia
              className="project-image-container"
              sx={{
                width: '40%',
                minWidth: '40%',
                height: 'auto',
                backgroundSize: 'contain',
                backgroundColor: '#2e2e2e',
              }}
              image={props.image}
            />
            {cardContent}
          </Box>

          <Box display={{ xs: 'flex', sm: 'none' }} flexDirection="column">
            <CardMedia
              className="project-image-container"
              sx={{
                height: 500,
                minHeight: 500,
                width: 'auto',
                backgroundSize: 'contain',
                backgroundColor: '#2e2e2e',
              }}
              image={props.image}
            />
            {cardContent}
          </Box>
        </>
      }
    />
  )
}

type Props = {
  image: string
  content: ReactNode
  title: string
}
