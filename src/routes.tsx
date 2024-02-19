import ErrorBoundary from '@components/ErrorBoundary';
import { createBrowserRouter } from 'react-router-dom';

import paths from '@/constants/paths';

import Book from './components/pages/Book';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

const router = createBrowserRouter([
  {
    path: paths.home,
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: paths.book.route,
    element: <Book />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: paths.notFound,
    element: <NotFound />,
    errorElement: <ErrorBoundary />,
  },
]);

export default router;
