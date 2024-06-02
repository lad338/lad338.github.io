import React from 'react'
import { ContentContainer } from '../ContentContainer'
import { ResumeText } from '../ResumeText'
import { ResumeTimeline } from '../ResumeTimeline'
import { ResumeCardSection } from '../ResumeCardSection'
import { ResumeContent } from '../types'
import Box from '@mui/material/Box'

interface IResumeSectionProps {
  title: string
  textContent: React.ReactNode
  contents: ResumeContent[]
}

export const ResumeSection: React.FC<IResumeSectionProps> = ({
  title,
  textContent,
  contents,
}) => (
  <ContentContainer>
    <Box marginBottom="25dvh">
      <ResumeText title={title} content={textContent} />
      <ResumeTimeline contents={contents} />
      <ResumeCardSection contents={contents} />
    </Box>
  </ContentContainer>
)
