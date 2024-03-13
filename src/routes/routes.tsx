import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import paths from '@/constants/paths';

const ErrorBoundary = lazy(() => import('@components/ErrorBoundary'));
const Home = lazy(() => import('@/pages/Home'));
const Book = lazy(() => import('@/pages/Book'));
const NotFound = lazy(() => import('@/pages/NotFound'));

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
