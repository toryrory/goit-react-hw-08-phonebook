import PropTypes from 'prop-types';
import { Button } from '@mui/material';

export const SubmitButton = ({ children }) => {
  return (
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
      {children}
    </Button>
  );
};

SubmitButton.propTypes = {
  children: PropTypes.string.isRequired,
};
