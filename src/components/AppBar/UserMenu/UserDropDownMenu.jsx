import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors } from 'redux/auth/selectors';
import { Menu, MenuItem, Typography, Container } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { authOperations } from 'redux/auth/operations';

export const UserDropDownMenu = () => {
  const userName = useSelector(authSelectors.selectUserName);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Container>
      <Typography
        sx={{
          cursor: 'pointer',
          fontSize: '22px',
          fontWeight: '500',
          color: '#5a1010',
          fontFamily: 'Roboto' && 'Helvetica' && 'Arial' && 'sans-serif',
          '&:hover': {
            color: 'white',
            transition: 'all ease-out 200ms',
          },
        }}
        variant="span"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={openMenu ? true : undefined}
        onClick={handleClick}
      >
        Welcome, {userName}!<PersonIcon fontSize="medium" />
      </Typography>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => dispatch(authOperations.logOut())}
          sx={{
            width: '100px',
            textAlign: 'center',
            color: '#5a1010',
            fontFamily: 'Roboto' && 'Helvetica' && 'Arial' && 'sans-serif',
            '&:hover': {
              color: 'white',
              transition: 'all ease-out 200ms',
            },
          }}
        >
          Log out
        </MenuItem>
      </Menu>
    </Container>
  );
};
