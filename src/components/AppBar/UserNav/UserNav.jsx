import { UserDropDownMenu } from 'components/AppBar/UserMenu/UserDropDownMenu';
import { StyledNavLink } from '../Navigation/Navigation.styled';
import { Container } from './UserNav.styled';

export const UserNav = () => {
  return (
    <Container>
      <StyledNavLink to="/contacts">Contacts</StyledNavLink>
      <UserDropDownMenu />
    </Container>
  );
};
