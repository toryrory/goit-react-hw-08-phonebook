import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export const FormTitle = ({ children }) => {
  return (
    <Typography
      variant="h4"
      textAlign="center"
      padding="25px"
      textTransform="uppercase"
    >
      {children}
      <AutoStoriesIcon
        sx={{
          fontSize: '35px',
          marginLeft: '20px',
        }}
      />
    </Typography>
  );
};

FormTitle.propTypes = {
  children: PropTypes.string.isRequired,
};
