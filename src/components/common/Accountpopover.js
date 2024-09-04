import React, { useContext, useRef, useState } from 'react';
import {
  alpha,
  Box,
  Button,
  CircularProgress,
  IconButton,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuPopover from './MenuPopover';
import { AuthContext } from '../../context/authContext';
import axios from 'axios';

export default function AccountPopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const { logout } = useContext(AuthContext);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        color='inherit'
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.62),
            },
          }),
        }}
      >
        <AccountCircleIcon color='textPrimary' />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEL={anchorRef.current}
        sx={{ width: 'fit-content' }}
      >
        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button
            fullWidth
            color='primary'
            variant='contained'
            onClick={() => logout()}
            size='small'
          >
            Logout
          </Button>
        </Box>
      </MenuPopover>
    </React.Fragment>
  );
}
