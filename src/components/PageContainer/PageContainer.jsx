import SquaresBG from 'react-animated-squares';
import { Container } from './PageContainer.styled';

export const PageContainer = ({ children }) => {
  return (
    <Container>
      <SquaresBG
        count={20}
        speed={0.7}
        backgroundColor={'#f0c5ae'}
        squareColor={'#ffffff'}
      />
      {children}
    </Container>
  );
};
