import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Layout from './Components/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Features from './Components/Features/Features.jsx'
import GetStarted from './Components/GetStarted/GetStarted.jsx'
import Register from './Components/Auth/Register.jsx'
import Login from './Components/Auth/Login.jsx'
import Templates from './Components/Templates/Templates.jsx'
import ResumeList from './Components/Resumes/ResumeList.jsx'
import ResumeEditor from './Components/Resumes/ResumeEditor.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import ProtectedRoute from './Components/Auth/ProtectedRoute.jsx'
import ResumePreview from './Components/Resumes/ResumePreview.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'features', element: <Features /> },
      { path: 'get-started', element: <ProtectedRoute><GetStarted /></ProtectedRoute> },
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
      { path: 'templates', element: <Templates /> },
      { path: 'resumes', element: <ProtectedRoute><ResumeList /></ProtectedRoute> },
      { path: 'resumes/:id', element: <ProtectedRoute><ResumeEditor /></ProtectedRoute> },
      { path: 'create-resume', element: <ProtectedRoute><ResumeEditor /></ProtectedRoute> },
      { path: 'resume-preview', element: <ProtectedRoute><ResumePreview /></ProtectedRoute> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
