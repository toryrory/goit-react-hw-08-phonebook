import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors } from 'redux/auth/selectors';
import { Menu, MenuItem, Typography } from '@mui/material';
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
    <div>
      <Typography
        sx={{ cursor: 'pointer' }}
        variant="span"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={openMenu ? true : undefined}
        onClick={handleClick}
      >
        Welcome, {userName}!
      </Typography>
      <PersonIcon fontSize="small" />

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
      >
        <MenuItem onClick={() => dispatch(authOperations.logOut())}>
          Log out
        </MenuItem>
      </Menu>
    </div>
  );
};
