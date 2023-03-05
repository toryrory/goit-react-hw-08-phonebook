import { Box, Typography, TextField, Button } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/operations';

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
  }
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  }
  return (
    <div>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: '470px',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'white',
          alignItems: 'center',
          margin: 'auto',
          marginTop: '40px',
          padding: '25px',
          border: '1px solid black',
          borderRadius: '8px',
          '&:hover': {
            boxShadow: '2px 2px 19px 0px rgba(0, 0, 0, 0.75)',
          },
        }}
        autoComplete="off"
      >
        <Typography
          variant="h4"
          textAlign="center"
          padding="25px"
          textTransform="uppercase"
        >
          Log in to account
          <AutoStoriesIcon
            sx={{
              fontSize: '35px',
              marginLeft: '20px',
            }}
          />
        </Typography>
        <TextField
          sx={{ width: '400px' }}
          color="secondary"
          type="email"
          name="email"
          value={email}
          variant="outlined"
          label="Email"
          placeholder="PepaPig@gmail.com"
          margin="normal"
          required
          onChange={handleInput}
        />
        <TextField
          sx={{ width: '400px' }}
          color="secondary"
          type="password"
          name="password"
          value={password}
          variant="outlined"
          label="Password"
          placeholder="Min 8 symbols required"
          margin="normal"
          required
          onChange={handleInput}
        />
        <Button
          type="submit"
          variant="outlined"
          sx={{
            width: '150px',
            marginTop: '20px',
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'center',
            color: '#dd5050',
            borderColor: '#dd5050',
            '&:hover': {
              backgroundColor: '#f2d8d86c',
              borderColor: '#dd5050',
            },
          }}
        >
          Log In
        </Button>
        <Typography>
          Please
          <NavLink to="/register"> register</NavLink> if you don't have an
          account yet.
        </Typography>
      </Box>
    </div>
  );
};
