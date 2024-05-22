import React from 'react'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, IconButton, ThemeProvider } from '@mui/material'
import createTypography from '@mui/material/styles/createTypography'
import createPalette from '@mui/material/styles/createPalette'
import { COLORS } from './sx-constants/colors'
import { Core } from './views'
import { AppBarContainer } from './components/AppBarContainer'
import { CONTENT_PAGES } from './pages/config'
import { SxProps } from '@mui/system'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

const APP_BAR_SM_CENTER_BUTTON_TEXT = 'ANGUS LI'
const APP_BAR_MD_HOME_BUTTON_TEXT = 'HOME'
const BOTTOM_BAR_TEXT = 'Created by Angus, 2024'
export const ICONS = [
  {
    id: 'linkedin-icon',
    icon: <LinkedInIcon />,
    href: 'https://www.linkedin.com/in/dickyli338/',
  },
  {
    id: 'github-con',
    icon: <GitHubIcon />,
    href: 'https://github.com/lad338',
  },
]

const APP_BAR_ICON_STYLES: SxProps = {
  m: 'auto',
  display: 'flex',
}

const APP_BAR_ICONS = ICONS.map((icon) => {
  return (
    <IconButton
      id={icon.id}
      key={icon.id}
      sx={APP_BAR_ICON_STYLES}
      href={icon.href}
      target="_blank"
    >
      {icon.icon}
    </IconButton>
  )
})

const palette = createPalette({
  mode: 'dark',
  text: {
    primary: COLORS.text.white,
    secondary: COLORS.text.green,
  },
  primary: {
    main: COLORS.bg,
    contrastText: COLORS.text.white,
  },
  secondary: {
    main: COLORS.bg,
    contrastText: COLORS.text.green,
  },
  background: {
    default: COLORS.bg,
  },
})

const theme = createTheme({
  palette: palette,
  typography: createTypography(palette, {
    allVariants: {
      lineHeight: '170%',
    },

    h1: {
      fontSize: 16,
      fontFamily: 'monospace',
      color: 'secondary',
    },
    h2: {
      fontSize: '8.8vw',
      fontWeight: 'bold',
      color: 'grey.500',
    },
    h3: {
      fontSize: '5.9vw',
      fontWeight: 'bold',
      color: 'grey.500',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      letterSpacing: '.3rem',
      fontFamily: 'monospace',
    },
    h5: {
      fontWeight: 500,
      letterSpacing: '.3rem',
      textDecoration: 'none',
      fontSize: '1rem',
    },
    subtitle1: {
      fontWeight: 900,
      fontSize: '1.5rem',
      lineHeight: '140%',
    },
    subtitle2: {
      fontSize: '0.7rem',
      lineHeight: '140%',
    },
  }),
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
        <CssBaseline />
        <AppBarContainer
          bottomText={BOTTOM_BAR_TEXT}
          pages={CONTENT_PAGES}
          appBarIcons={APP_BAR_ICONS}
          appBarSmCenterButtonText={APP_BAR_SM_CENTER_BUTTON_TEXT}
          appBarMdHomeButtonText={APP_BAR_MD_HOME_BUTTON_TEXT}
        >
          {<Core />}
        </AppBarContainer>
      </Box>
    </ThemeProvider>
  )
}

export default App
