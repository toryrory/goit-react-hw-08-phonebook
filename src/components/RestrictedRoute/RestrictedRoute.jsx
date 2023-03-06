//ограниченный маршрут, маршрут на котором пользователю не надо быть если он залогинен
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth/selectors';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component; //добавить нотификейшн что такого пользователя не найдено, попробуйте еще раз
};

RestrictedRoute.propTypes = {
  redirectTo: PropTypes.string.isRequired,
};

export default RestrictedRoute;
