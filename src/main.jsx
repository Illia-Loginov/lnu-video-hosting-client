import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import Error from './pages/Error';
import Player from './pages/Player';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />
  },
  {
    path: '/videos/:id',
    element: <Player />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
