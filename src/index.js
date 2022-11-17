import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/theme';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root from './routes/root'
import App from './pages/_app';
import Error from './pages/error'
import Test from './pages/test';
import Style from './pages/style'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: 'test',
        element: <Test />
      },
      {
        path: 'style',
        element: <Style />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
