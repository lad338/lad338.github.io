import { FC } from 'react'
import Box from '@mui/material/Box'
import { IProjectCardProps, ProjectCard } from '../ProjectCard'

interface IProjectCardsProps {
  projects: IProjectCardProps[]
}

export const ProjectCards: FC<IProjectCardsProps> = ({ projects }) => (
  <Box margin="auto" display="flex" flexDirection="column">
    {projects.map((project) => (
      <ProjectCard {...project}>{project.children}</ProjectCard>
    ))}
  </Box>
)
