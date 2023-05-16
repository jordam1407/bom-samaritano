import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import theme from './theme';
import Landing from './pages/Landing';

const queryClient = new QueryClient();

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={ theme }>
        <QueryClientProvider client={ queryClient }>
          <Routes>
            <Route exact path="/" element={ <Landing /> } />
          </Routes>
        </QueryClientProvider>
      </ThemeProvider>
    </Router>
  );
}
