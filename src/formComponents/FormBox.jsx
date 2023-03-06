import PropTypes from 'prop-types';
import { Box } from '@mui/material';

export const FormBox = ({ onChange, children }) => {
  return (
    <Box
      component="form"
      onSubmit={onChange}
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
      {children}
    </Box>
  );
};

FormBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
};