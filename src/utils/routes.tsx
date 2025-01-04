import { createBrowserRouter, Outlet } from 'react-router-dom';
import Header from '../components/Header';
import MainPage from '../pages/MainPage';
import MobileBottomNavigation from '../components/BottomNavigation';
import ErrorPage from '../pages/ErrorPage';
import { fetchRanobes } from '../redux/middleware/TopRanobesThunk';
import { store } from '../redux/store';

const routes = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <Outlet />
        <MobileBottomNavigation />
      </>
    ),
    children: [
      // {
      //   path: "/ranobe/:id",
      //   element: <RanobePage />,
      // },
      {
        path: '/',
        element: <MainPage />,
        loader: async () => {
          store.dispatch(fetchRanobes('ranobe/top'));
        },
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default routes;
