import React, { ReactNode } from 'react'
import Box from '@mui/material/Box'
import { CardMedia, Collapse } from '@mui/material'
import { CardFrame } from '../../components'
import Typography from '@mui/material/Typography'
import { ProjectCardActionBar } from './ProjectCardActionBar'
import { ProjectDetail, ProjectDetailProps } from './ProjectDetail'

export const ProjectCardFrame: React.FC<ProjectCardFrameProps> = (props) => {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const cardContent = (
    <Box
      className="project-description-container"
      display="flex"
      flexDirection="column"
    >
      <Box
        marginY="auto"
        marginLeft={3}
        minWidth={{ xs: 'auto', md: '60dvw', lg: '50dvw' }}
      >
        <Typography variant="subtitle1" marginY={2} color="text.secondary">
          {props.title}
        </Typography>
        <Box maxWidth={{ xs: 'auto', md: '58dvw', lg: '48dvw' }}>
          {props.content}
        </Box>
      </Box>
      <ProjectCardActionBar
        openLink={props.openLink}
        expanded={expanded}
        handleExpandClick={handleExpandClick}
      />
    </Box>
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
                width: '30dvw',
                minWidth: '30dvw',
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

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Box display="flex" flexDirection="column" marginY={2}>
              <ProjectDetail
                detail={props.detailProps.detail}
                tags={props.detailProps.tags}
              />
            </Box>
          </Collapse>
        </>
      }
    />
  )
}

export type ProjectCardFrameProps = {
  key: string
  image: string
  content: ReactNode
  title: string
  openLink: string
  detailProps: ProjectDetailProps
}
