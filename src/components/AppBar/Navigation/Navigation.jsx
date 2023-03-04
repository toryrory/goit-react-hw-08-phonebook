import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserNav } from '../UserNav/UserNav';
import { Container } from './Navigation.styled';
import { authSelectors } from 'redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <Container>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn ? <UserNav /> : <AuthNav />}
    </Container>
  );
};
