import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AddCoffee from './component/AddCoffee.jsx';
import UpdateCoffee from './component/UpdateCoffee.jsx';
import SignIn from './component/SignIn.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import SignUp from './component/SignUp.jsx';
import Users from './component/Users.jsx';
import Root from './layout/Root.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () => fetch('https://coffee-store-server-gilt.vercel.app/coffee')
      },
      {
        path:'/addCoffee',
        element:<AddCoffee></AddCoffee>
      },
      {
        path:'/updateCoffee/:id',
        element:<UpdateCoffee></UpdateCoffee>,
        loader: ({params}) => fetch(`https://coffee-store-server-gilt.vercel.app/coffee/${params.id}`)
      },
      {
        path:'/signUp',
        element:<SignUp></SignUp>
      },
      {
        path:'/signIn',
        element:<SignIn></SignIn>
      },
      {
        path:'/users',
        element:<Users></Users>,
        loader: () => fetch('https://coffee-store-server-gilt.vercel.app/user')
      }
    ]
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
