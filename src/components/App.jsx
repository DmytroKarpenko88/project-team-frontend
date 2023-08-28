import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchCurrentUser,
  getUserProfile,
  getUserCurrentNotices,
} from 'redux/auth/auth-operations';
import SharedLayout from './SharedLayout/SharedLayout';
import { useAuth } from 'hooks/useAuth';
import Main from './Main/Main';
import NoticesPage from 'pages/NoticesPage/NoticesPage';
import AddPet from '../pages/AddPet/AddPet';

import PublicRoute from './Routes/PublicRoute';
import PrivateRoute from './Routes/PrivateRoute';
import Loader from './Loader/Loader';

const Register = lazy(() => import('pages/RegisterPage/RegisterPage'));
const Login = lazy(() => import('pages/LoginPage/LoginPage'));
const User = lazy(() => import('pages/User/User'));
const IconPage = lazy(() => import('pages/IconPage'));
const PageNotFound = lazy(() => import('pages/PageNotFound/PageNotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn, isRegistered } = useAuth();
  // console.log("isRegistered:", isRegistered)
  // console.log("isLoggedIn :", isLoggedIn )

  useEffect(() => {
    dispatch(fetchCurrentUser());
    dispatch(getUserProfile());
    dispatch(getUserCurrentNotices());
    // if(isLoggedIn) {
    //   dispatch(fetchCurrentUser());
    //   dispatch(getUserProfile())
    // }
  }, [dispatch, isLoggedIn, isRegistered]);

  return (
    <>
      {!isRefreshing ? (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Main />} />
            <Route
              path="register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route path="notices/:categoryName" element={<NoticesPage />} />
            <Route
              path="user"
              element={
                <PrivateRoute>
                  <User />
                </PrivateRoute>
              }
            />
            <Route
              path="add-pet"
              element={
                <PrivateRoute>
                  <AddPet />
                </PrivateRoute>
              }
            />
            <Route path="icons" element={<IconPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      ) : (
        <Loader />
      )}
    </>
  );
};
