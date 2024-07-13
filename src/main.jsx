import React from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Layout from './Components/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Features from './Components/Features/Features.jsx'
import GetStarted from './Components/GetStarted/GetStarted.jsx'
import Register from './Components/Auth/Register.jsx'
import Login from './Components/Auth/Login.jsx'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'features', element: <Features /> },
      { path: 'get-started', element: <GetStarted />},
      { path: 'register', element: <Register />},
      { path: 'login', element: <Login />}
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
