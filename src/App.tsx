import Header from './components/Header';
import MainPage from './pages/MainPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';

const App = () => {
  const theme = createTheme({
    colorSchemes: {
      dark: true,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <ErrorPage/>
      {/* <MainPage /> */}
    </ThemeProvider>
  );
};

export default App;
