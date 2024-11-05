import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/MainLayout/MainLayout';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import CardDetails from './components/CardDetails/CardDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Header></Header>,
      },
      {
        path:'/statistics',
        element:<h1>This is statistics</h1>
      },
      {
        path:'/dashboard',
        element:<h1>This is dashboard</h1>
      },
      {
        path: "/product/:id",
        element: <CardDetails />,
        loader: () => fetch("public/gadget.json")
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
