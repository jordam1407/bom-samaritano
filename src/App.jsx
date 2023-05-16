import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme';
import Landing from './pages/Landing';

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={ theme }>
        <Routes>
          <Route exact path="/" element={ <Landing /> } />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}
