import { createBrowserRouter } from 'react-router-dom';
import Home from './components/pages/Home';
import Book from './components/pages/Book';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/books/:id',
    element: <Book />,
  },
]);

export default router;
