import { FC, ReactNode } from 'react'
import { ContentContainer } from '../ContentContainer'
import { ResumeText } from '../ResumeText'
import { ResumeTimeline } from '../ResumeTimeline'
import { ResumeCards } from '../ResumeCards'
import { ResumeContent } from '../types'
import Box from '@mui/material/Box'

interface IResumeSectionProps {
  title: string
  textContent: ReactNode
  contents: ResumeContent[]
}

export const ResumeSection: FC<IResumeSectionProps> = ({
  title,
  textContent,
  contents,
}) => (
  <ContentContainer>
    <Box marginBottom="25dvh">
      <ResumeText title={title}>{textContent}</ResumeText>
      <ResumeTimeline contents={contents} />
      <ResumeCards contents={contents} />
    </Box>
  </ContentContainer>
)
