import React from 'react'
import './assets/App.css'
import { AppBarContainer } from './features/appBar/AppBarContainer'
import { Core } from './views/Core'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material'
import createTypography from '@mui/material/styles/createTypography'
import createPalette from '@mui/material/styles/createPalette'
import COLORS from './config/colors'

const palette = createPalette({
  mode: 'dark',
  text: {
    primary: COLORS.text.white,
    secondary: COLORS.text.green,
  },
  primary: {
    main: COLORS.appBar,
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
        {<AppBarContainer children={<Core />} />}
      </Box>
    </ThemeProvider>
  )
}

export default App
