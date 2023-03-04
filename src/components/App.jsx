import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authOperations } from "redux/auth/operations";
import { authSelectors } from "redux/auth/selectors";
import { AppBar } from "./AppBar/AppBar";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import RestrictedRoute from "./RestrictedRoute/RestrictedRoute";
import { Suspense, lazy } from "react";
const Home = lazy(() => import('pages/Home/Home'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Registration = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));

export function App() {
  const isRefresing = useSelector(authSelectors.selectIsRefreshing);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch])


  return (
    !isRefresing && (
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<Home />} />
            <Route
              path="contacts"
              element={
                <PrivateRoute component={<Contacts />} redirectTo="/login" />
              }
            />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  component={<Registration />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute component={<Login />} redirectTo="/contacts" />
              }
            />
          </Route>
        </Routes>
      </Suspense>
    )
  );
}
