import { PageType } from '../../components/types'

export const TOP_ANCHOR = 'top'
export const ABOUT_ANCHOR = 'about'
export const RESUME_ANCHOR = 'resume'
export const PROJECTS_ANCHOR = 'projects'
export const CONTENT_PAGES: PageType[] = [
  {
    label: 'About',
    anchor: ABOUT_ANCHOR,
  },
  {
    label: 'Resume',
    anchor: RESUME_ANCHOR,
  },
  {
    label: 'Projects',
    anchor: PROJECTS_ANCHOR,
  },
]
