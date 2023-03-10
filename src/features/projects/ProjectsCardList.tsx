import React from 'react'
import { Box } from '@mui/material'
import { ProjectCardFrame } from './ProjectCardFrame'
import { PROJECTS } from './projects'

export const ProjectsCardList: React.FC = () => {
  return (
    <Box
      width={{ xs: '94vw', lg: '84vw' }}
      margin="auto"
      display="flex"
      flexDirection="column"
    >
      {PROJECTS.map((project) => {
        return (
          <ProjectCardFrame
            key={project.key + '-card'}
            image={project.image}
            title={project.title}
            openLink={project.openLink}
            content={project.content}
            detailProps={project.detailProps}
          />
        )
      })}
    </Box>
  )
}
