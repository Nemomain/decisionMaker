import React from 'react'
import {createBrowserRouter, Router, RouterProvider} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import './index.css'

import Header from './Components/Header.tsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Header/>,
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router = {router}/>

)
