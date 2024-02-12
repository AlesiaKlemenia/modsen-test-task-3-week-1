import React from 'react';
import ReactDOM from 'react-dom/client';

// eslint-disable-next-line import/no-extraneous-dependencies
import { RouterProvider } from 'react-router';
import router from './routes';
import './global.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
