import React from 'react';
import IPOList from './components/List/List';
import IPODetails from './components/Detail/Detail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from 'styled-components';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

// Create a theme with MUI
const theme = createTheme({
  typography: {
    fontFamily: 'Sora, sans-serif',
  },
});

// Global styles with styled-components
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Sora', sans-serif;
  }
`;

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<IPOList />} />
            <Route path="/details/:id" element={<IPODetails />} />
          </Routes>
        </Router>
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
