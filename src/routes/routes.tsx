import ErrorBoundary from '@components/ErrorBoundary';
import { createBrowserRouter } from 'react-router-dom';

import paths from '@/constants/paths';
import Book from '@/pages/Book';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';

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
