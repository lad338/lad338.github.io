import { FC, ReactNode, useState } from 'react'
import Box from '@mui/material/Box'
import { CardFrame } from '../CardFrame'
import { CardMedia, Collapse } from '@mui/material'
import { COLORS } from '../../sx-constants/colors'
import { IProjectDetailsProps, ProjectDetails } from '../ProjectDetails'
import Typography from '@mui/material/Typography'
import { ProjectCardActionBar } from '../ProjectCardActionBar'
import { SPACING_2 } from '../../sx-constants/spacing'

export interface IProjectCardProps {
  key: string
  image: string
  children: ReactNode
  title: string
  link: string
  details: Omit<IProjectDetailsProps, 'key'>
}

export const ProjectCard: FC<IProjectCardProps> = ({
  key,
  image,
  children,
  title,
  link,
  details,
}) => {
  const [expanded, setExpanded] = useState(false)

  const onExpand = () => {
    setExpanded(!expanded)
  }

  const content = (
    <Box display="flex" flexDirection="column" width="100%">
      <Box
        marginLeft={SPACING_2}
        height="100%"
        width="100%"
        justifyContent="space-between"
      >
        <Typography
          variant="subtitle1"
          marginY={SPACING_2}
          color="text.secondary"
        >
          {title}
        </Typography>
        <Box>{children}</Box>
      </Box>
      <ProjectCardActionBar
        link={link}
        isExpanded={expanded}
        onExpandIconClick={onExpand}
      />
    </Box>
  )

  return (
    <CardFrame>
      <>
        <Box display={{ xs: 'flex', sm: 'none' }} flexDirection="column">
          <CardMedia
            sx={{
              height: 500,
              minHeight: 500,
              width: 'auto',
              backgroundSize: 'contain',
              backgroundColor: COLORS.image.bg,
            }}
            image={image}
          />

          {content}
        </Box>
        <Box
          display={{ xs: 'none', sm: 'flex' }}
          minHeight={500}
          flexDirection="row"
        >
          <CardMedia
            sx={{
              width: '30dvw',
              minWidth: '30dvw',
              height: 'auto',
              backgroundSize: 'contain',
              backgroundColor: COLORS.image.bg,
            }}
            image={image}
          />

          {content}
        </Box>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box display="flex" flexDirection="column" marginY={2}>
            <ProjectDetails
              key={key}
              contents={details.contents}
              tags={details.tags}
            />
          </Box>
        </Collapse>
      </>
    </CardFrame>
  )
}
