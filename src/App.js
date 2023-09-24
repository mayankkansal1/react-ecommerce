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
import PageNotFound from './pages/404';
import OrderSuccessPage from './pages/OrderSuccessPage';
import UserOrders from './features/user/components/UserOrders';
import UserOrdersPage from './pages/UserOrderPage';
import UserProfilePage from './pages/UserProfilePage';
import { fetchLoggedInUserAsync, selectUserInfo } from './features/user/userSlice';
import { selectLoggedInUser } from './features/auth/authSlice';
import Logout from './features/auth/components/Logout';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
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
  },
  {
    path: "/order-success/:id",
    element: <OrderSuccessPage></OrderSuccessPage>
  },
  {
    path: "/orders",
    element: <UserOrdersPage></UserOrdersPage>
  },
  {
    path: "/profile",
    element: <UserProfilePage></UserProfilePage>
  },
  {
    path: "/logout",
    element: <Logout></Logout>
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage></ForgotPasswordPage>
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>
  },




]);

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectLoggedInUser)
  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.id))
      dispatch(fetchLoggedInUserAsync(user.id))
    }
  }, [dispatch, user])

  return (
    <div className="App">
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
