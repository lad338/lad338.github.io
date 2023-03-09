import React from 'react'
import { Box, Typography } from '@mui/material'
import { ProjectCardFrame } from './ProjectCardFrame'

export const ProjectsCardList: React.FC = () => {
  return (
    <Box
      width={{ xs: '94vw', lg: '84vw' }}
      margin="auto"
      display="flex"
      flexDirection="column"
    >
      <ProjectCardFrame
        image="/personal-dictionary-image.png"
        title="Personal Dictionary"
        content={
          <Typography variant="body1" color="grey.500">
            A web app to create a personal dictionary for one to jot notes, save
            memos or any creative ways that one can think off.
            <br />
            Contents saved are aimed to be optimized in being searched
            afterwards.
            <br />
            It is designed to be a PWA that can be saved down on a mobile phone.
            <br />
            This is my very first Frontend project, created with React.
          </Typography>
        }
      />
      <ProjectCardFrame
        image="/personal-website-image.png"
        title="Personal Website"
        content={
          <Typography variant="body1" color="grey.500">
            My personal website.
            <br />
            The website that you are currently viewing.
            <br />
            It is designed to be responsive on width to support both computer
            and mobile browsers.
            <br />
            This is my second React project.
          </Typography>
        }
      />
    </Box>
  )
}
