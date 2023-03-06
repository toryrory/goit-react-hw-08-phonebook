import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  TextField,
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormControl,
  InputLabel,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const InputName = ({ name, onChange }) => {
  return (
    <TextField
      sx={{
        width: '400px',
      }}
      color="secondary"
      type="text"
      name="username"
      value={name}
      variant="outlined"
      margin="normal"
      label="Username"
      placeholder="PepaPig"
      required
      onChange={onChange}
    />
  );
};
export const InputEmail = ({ email, onChange }) => {
  return (
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
      onChange={onChange}
    />
  );
};
export const InputPassword = ({ password, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FormControl
      sx={{ width: '400px' }}
      variant="outlined"
      margin="normal"
      color="secondary"
      placeholder="Min 8 symbols required"
    >
      <InputLabel htmlFor="outlined-adornment-password" required>
        Password
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        label="Password_"
        placeholder="Min 8 symbols required"
        onChange={onChange}
        name="password"
        value={password}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

InputName.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
InputEmail.propTypes = {
  onChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};
InputPassword.propTypes = {
  onChange: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
};