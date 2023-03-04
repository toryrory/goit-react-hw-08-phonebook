import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth/selectors';
const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
    const isRefreshing = useSelector(authSelectors.selectIsRefreshing);
    const shouldRedirect = !isRefreshing && !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component; //добавить нотификейшн что такого пользователя не найдено, попробуйте еще раз
};
export default PrivateRoute;
