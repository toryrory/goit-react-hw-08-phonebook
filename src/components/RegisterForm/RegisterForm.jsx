import { Box, Typography, TextField, Button } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/operations';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleInput = ({target: {name, value}}) => {
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
  }
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.registration({ name, email, password }));
    setName('');
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
          Create Account
          <AutoStoriesIcon
            sx={{
              fontSize: '35px',
              marginLeft: '20px',
            }}
          />
        </Typography>
        <TextField
          sx={{ width: '400px' }}
          type="text"
          name="username"
          value={name}
          variant="outlined"
          margin="normal"
          label="Username"
          placeholder="PepaPig"
          required
          onChange={handleInput}
        />
        <TextField
          sx={{ width: '400px' }}
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
          type="password"
          name="password"
          value={password}
          variant="outlined"
          label="Password"
          placeholder="Min 7 symbols required"
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
          }}
        >
          Register
        </Button>
        <Typography>
          <NavLink to="/login">Log In</NavLink> if you already have an account.
        </Typography>
      </Box>
    </div>
  );
};
