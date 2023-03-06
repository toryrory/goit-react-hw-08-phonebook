import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/AppBar/Navigation/Navigation';
import SquaresBG from 'react-animated-squares';

export const AppBar = () => {
  return (
    <div style={{overflow: 'hidden'}}>
      <SquaresBG
        count={20}
        speed={0.7}
        backgroundColor={'#f0c5ae'}
        squareColor={'#ffffff'}
      />
      <Navigation />
      <Outlet />
    </div>
  );
};
