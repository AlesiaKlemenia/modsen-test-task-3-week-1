import '@/global.css';

import { ThemeProvider } from '@mui/material';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';

import router from '@/routes/routes';
import theme from '@/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
);
