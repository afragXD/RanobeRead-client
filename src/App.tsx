import Header from './components/Header';
import MainPage from './pages/MainPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const App = () => {
  const theme = createTheme({
    colorSchemes: {
      dark: true,
    },
  });

  return (
    <ThemeProvider theme={theme}>
    </ThemeProvider>
  );
};

export default App;
