import { Page } from './types/page'

export const TOP_ANCHOR = 'top'
export const ABOUT_ANCHOR = 'about'
export const RESUME_ANCHOR = 'resume'
export const PROJECTS_ANCHOR = 'projects'
export const PAGES: Page[] = [
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
