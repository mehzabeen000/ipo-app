import React from 'react';
import IPOList from './components/List/List';
import IPODetails from './components/Detail/Detail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Sora, sans-serif',
  },
});


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<IPOList />} />
          <Route path="/details/:id" element={<IPODetails />} />
        </Routes>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
