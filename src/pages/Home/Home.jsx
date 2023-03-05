import {Title, Text} from './Home.styled'
import { PageContainer } from 'components/PageContainer/PageContainer';

const Home = () => {
  return (
    <PageContainer>
      <Title>Welcome to Phonebook</Title>
      <Text>
        The application will help you quickly find the desired contact and keep
        order in your address book.
      </Text>
    </PageContainer>
  );
};
export default Home;
