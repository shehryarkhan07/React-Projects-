import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import ContactUs from './components/ContuactUs/ContactUs.jsx'
import User from './components/User/User.jsx'
import GitHub from './components/GitHub/GitHub.jsx'

  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Layout/>,
  //     children:[
  //       {
  //         path:"",
  //         element: <Home/>
  //       },
  //       {
  //         path: "about",
  //         element: <About/>
  //       }
  //     ]
  //   }
  // ])

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='ContactUs' element={<ContactUs/>}/>
    <Route path='user/:userid' element={<User/>}/>
    <Route path='GitHub' element={<GitHub/>}/>
    </Route>
    )
  )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>

     
  </React.StrictMode>,
)
 