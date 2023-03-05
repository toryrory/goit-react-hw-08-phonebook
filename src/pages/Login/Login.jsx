import { LoginForm } from 'components/LoginForm/LoginForm';
import { Title } from '../Register/Register.styled';
import { PageContainer } from 'components/PageContainer/PageContainer';

 const Login = () => {
  return (
    <PageContainer>
      <Title>Log in to your account</Title>
      <LoginForm />
    </PageContainer>
  );
};
export default Login;