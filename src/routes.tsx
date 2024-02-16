import { createBrowserRouter } from 'react-router-dom';

import Book from './components/pages/Book';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/books/:id',
    element: <Book />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
