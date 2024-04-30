import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter,
RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Blog from './components/Blog.jsx';

const router = createBrowserRouter([
  {
    path: "",
    element: <App/>,
    children:[
      {
        path: "home",
        element: <Home/>
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "blog",
        element: <Blog/>
      },
      {
        path: "myson",
        element: <h1>I am your favourite Son</h1>
      }
    ]
  },
  {
    path: "/mygf",
    element: <div>Meri wali Chinnar hai</div>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
