import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Dashbord from './components/Dashbord/Dashbord';
import Gadget from './components/Gadget/Gadget';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../categoriesData.json'),
        children:[
          {
            path:'/',
            element: <Gadget></Gadget>,
            loader: () => fetch('../gadgetsData.json'),
          },
          {
            path:'category/:category',
            element: <Gadget></Gadget>,
            loader: () => fetch('../gadgetsData.json'),
          },
        ],
      },
      {
        path: 'dashbord',
        element: <Dashbord></Dashbord>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
