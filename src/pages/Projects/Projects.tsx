import { FC } from 'react'
import { ProjectsText } from '../../components/ProjectsText'
import Typography from '@mui/material/Typography'
import { ProjectCards } from '../../components/ProjectCards'
import { IProjectCardProps } from '../../components/ProjectCard'
import { ContentContainer } from '../../components/ContentContainer'

export const Projects: FC = () => (
  <ContentContainer>
    <ProjectsText title={'Projects'}>
      <Typography color="grey.500">
        Here are some projects I have created:
      </Typography>
    </ProjectsText>
    <ProjectCards projects={PROJECTS} />
  </ContentContainer>
)

const PROJECTS: IProjectCardProps[] = [
  {
    key: 'personal-dictionary',
    image: '/personal-dictionary-image.png',
    title: 'Personal Dictionary',
    link: 'https://personal-dictionary-lad338.netlify.app/',
    children: (
      <Typography variant="body1" color="grey.500">
        A web app to create a personal dictionary for one to jot notes, save
        memos or any creative ways that one can think off.
        <br />
        Contents saved are aimed to be optimized in being searched afterwards.
        <br />
        It is designed to be a PWA that can be saved down on a mobile phone.
      </Typography>
    ),
    details: {
      contents: [
        'This is my first frontend project, created with React.',
        'I had this project in mind because I sometimes find it difficult to have a handy notes application.',
        'I thought that it is better to search back items with tags instead of full text search.',
        'It feels great to have a self-created app that can be used daily.',
      ],
      tags: [
        'TypeScript',
        'React',
        'Material UI',
        'IndexedDB (Dexie)',
        'Netlify',
      ],
    },
  },
  {
    key: 'personal-website',
    image: '/personal-website-image.png',
    title: 'This Website',
    link: 'https://lad338.github.io',
    children: (
      <Typography variant="body1" color="grey.500">
        My personal website to showcase my work experience and project
        experience.
        <br />
        It is a single page website to be my resume on the web.
        <br />
      </Typography>
    ),
    details: {
      contents: [
        'It is designed to be responsive on width to support both computer and mobile browsers.',
        'This is my second frontend project. I tried it out as a single long web page style instead of using React routed pages',
      ],
      tags: ['TypeScript', 'React', 'Material UI', 'GitHub pages'],
    },
  },
]
