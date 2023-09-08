import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
// import ProductList from './features/Product-list/ProductList';
import Home from './pages/home';
import Login from './features/auth/components/Login';
import Signup from './features/auth/components/Signup';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/Login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/Signup",
    element: <SignUpPage></SignUpPage>
  },
  {
    path: "/Cart",
    element: <CartPage></CartPage>
  },

]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
