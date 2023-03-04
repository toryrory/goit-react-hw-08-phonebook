import { NavLink } from 'react-router-dom';
import { UserDropDownMenu } from 'components/AppBar/UserMenu/UserDropDownMenu';

export const UserNav = () => {
  return (
    <div>
      <NavLink to="/contacts">Contacts</NavLink>
      <UserDropDownMenu/>
      {/* <span>Welcome, {userName}!</span>
      <button type='button'>Log out</button> */}
    </div>
  );
};
