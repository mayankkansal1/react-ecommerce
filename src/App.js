import React, { useEffect } from 'react';
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
import Checkout from './pages/CheckOut';
import ProductDetail from './features/Product-list/components/ProductDetails';
import ProductDetailPage from './pages/ProductDetailsPage';
import Protected from './features/auth/components/protected';
import { fetchItemsByUserId } from './features/cart/cartAPI';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import { selectLoggedInUser } from './features/auth/authSlice';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Protected><Home></Home></Protected>,
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
    element: <Protected><CartPage></CartPage></Protected>
  },
  {
    path: "/Checkout",
    element: <Protected> <Checkout></Checkout></Protected >
  },
  {
    path: "/Product-detail/:id",
    element: <Protected > <ProductDetailPage></ProductDetailPage></Protected >
  }

]);

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectLoggedInUser)
  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.id))
    }
  }, [dispatch, user])

  return (
    <div className="App">
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
