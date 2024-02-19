import { createBrowserRouter } from 'react-router-dom';

import paths from '@/constants/paths';

import Book from './components/pages/Book';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

const router = createBrowserRouter([
  {
    path: paths.home,
    element: <Home />,
  },
  {
    path: paths.book.route,
    element: <Book />,
  },
  {
    path: paths.notFound,
    element: <NotFound />,
  },
]);

export default router;
