import { useSelector } from 'react-redux';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserNav } from '../UserNav/UserNav';
import { Container } from './Navigation.styled';
import { authSelectors } from 'redux/auth/selectors';
import { StyledNavLink } from './Navigation.styled';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <Container>
      <StyledNavLink to="/">
        <AutoStoriesIcon fontSize="medium" /> Home
      </StyledNavLink>
      {isLoggedIn ? <UserNav /> : <AuthNav />}
    </Container>
  );
};
