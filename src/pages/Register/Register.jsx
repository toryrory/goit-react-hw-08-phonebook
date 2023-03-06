import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Title } from './Register.styled';
import { PageContainer } from 'components/PageContainer/PageContainer';

const Registration = () => {
  return (
    <PageContainer>
      <Title>Registration page</Title>
      <RegisterForm />
    </PageContainer>
  );
};
export default Registration;
