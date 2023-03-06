import React from 'react'
import './assets/App.css'
import { AppBarContainer } from './components/AppBarContainer'
import { Core } from './views/Core'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  typography: {
    h1: {
      fontSize: 16,
      fontFamily: 'monospace',
    },
    h2: {
      fontSize: '8.25vw',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: '5.7vw',
      fontWeight: 'bold',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
        <CssBaseline />
        {
          <AppBarContainer
            content={() => (
              <>
                <Core />
              </>
            )}
          />
        }
      </Box>
    </ThemeProvider>
  )
}

export default App
