import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/AppBar/Navigation/Navigation';

export const AppBar = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};
