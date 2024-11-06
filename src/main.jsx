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
import Gadget from './components/Gadget/Gadget';
import GadgetsDetail from './components/GadgetsDetail/GadgetsDetail';
import Statistics from './components/Statistics/Statistics';
import Dashboard from './components/Dashboard/Dashboard';
import ExtraSection from './components/ExtraSection/ExtraSection';
import Registration from './components/Registration/Registration';
import { HelmetProvider } from "react-helmet-async";

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
        path: 'gadgets/:product_id',
        element: <GadgetsDetail></GadgetsDetail>,
        loader: () => fetch('../gadgetsData.json'), 
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        
      },
      {
        path: '/extraSection',
        element: <ExtraSection></ExtraSection>,
        
      },
      {
        path: '/registration',
        element: <Registration></Registration>,
        
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
