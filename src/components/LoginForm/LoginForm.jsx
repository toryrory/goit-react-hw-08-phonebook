import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/operations';
import { InputEmail, InputPassword } from 'formComponents/Inputs';
import { SubmitButton } from 'formComponents/SubmitButton';
import { FormTitle } from 'formComponents/FormTitle';
import { FormBox } from 'formComponents/FormBox';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleInput = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        break;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <FormBox onChange={handleSubmit}>
      <FormTitle>Log in to account</FormTitle>
      <InputEmail email={email} onChange={handleInput} />
      <InputPassword password={password} onChange={handleInput} />
      <SubmitButton>Log In</SubmitButton>
      <Typography>
        Please
        <NavLink to="/register"> register</NavLink> if you don't have an account
        yet.
      </Typography>
    </FormBox>
  );
};
