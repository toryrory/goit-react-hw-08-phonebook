import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/operations';
import { InputName, InputEmail, InputPassword } from 'formComponents/Inputs';
import { SubmitButton } from 'formComponents/SubmitButton';
import { FormTitle } from 'formComponents/FormTitle';
import { FormBox } from 'formComponents/FormBox';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleInput = ({ target: { name, value } }) => {
    switch (name) {
      case 'username':
        return setName(value);
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
    dispatch(authOperations.registration({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <FormBox onChange={handleSubmit}>
      <FormTitle>Create Account</FormTitle>
      <InputName name={name} onChange={handleInput} />
      <InputEmail email={email} onChange={handleInput} />
      <InputPassword password={password} onChange={handleInput} />
      <SubmitButton>Register</SubmitButton>
      <Typography>
        <NavLink to="/login">Log In</NavLink> if you already have an account.
      </Typography>
    </FormBox>
  );
};
