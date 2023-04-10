import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Home from './components/Home/Home'
import Blog from './components/Blog/Blog'
import AppliedJob from './components/AppliedJob/AppliedJob'
import Statistics from './components/Statistics/Statistics'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('datas.json')
      },
      {
        path: '/blog',
        element: <Blog/>
      },
      {
        path: 'applied-job',
        element: <AppliedJob/>
      },
      {
        path: 'statistics', 
        element: <Statistics/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
