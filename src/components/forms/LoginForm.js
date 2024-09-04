import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { AuthContext } from '../../context/authContext';
import axios from 'axios';
import { API_BASE_URL, handleCatch } from '../../utils/makeReq';
import { LoadingButton } from '@mui/lab';
import { toast } from 'react-toastify';

const defaultValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const { isLoggedIn, saveUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`${API_BASE_URL}/auth/login`, {
        ...formValues,
      });
      if (res.data.data)
        return saveUser(res.data.data.user, res.data.data.token);
      toast.error(JSON.parse(res.data.error).message);
      setLoading(false);
    } catch (err) {
      handleCatch(err);
      setLoading(false);
    }
  };
  const handleFormValueChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const handleShowPassword = (e) => {
    setShowPassword((st) => !st);
  };

  useEffect(() => {
    if (isLoggedIn) navigate('/hangman');
  }, [isLoggedIn, navigate]);

  return (
    <Box width='inherit' mt={7}>
      <form onSubmit={handleFormSubmit}>
        <Box display='flex' gap='1.5rem' flexDirection='column'>
          <TextField
            name='email'
            label='Email'
            variant='outlined'
            value={formValues.email}
            onChange={handleFormValueChange}
          />
          <FormControl variant='outlined'>
            <InputLabel htmlFor='outlined-adornment-password'>
              Password
            </InputLabel>
            <OutlinedInput
              id='outlined-adornment-password'
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleShowPassword}
                    edge='end'
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              name='password'
              label='Password'
              value={formValues.password}
              onChange={handleFormValueChange}
            />
          </FormControl>

          <LoadingButton
            loading={loading}
            type='submit'
            variant='contained'
            color='primary'
          >
            LOGIN
          </LoadingButton>

          <Box display='border-box'>
            <HorlineWithWord variant='subtitle1'>
              <span>or</span>
            </HorlineWithWord>
          </Box>
          <Button
            variant='outlined'
            color='secondary'
            onClick={() => navigate('/register')}
          >
            JOIN
          </Button>
        </Box>
      </form>
    </Box>
  );
};

const HorlineWithWord = styled(Typography)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  borderBottom:
    theme.palette.mode === 'dark'
      ? '1px solid #919eab3d'
      : '1px solid #919eab3d',
  lineHeight: 0,
  margin: '10px 0 20px',

  '& span': {
    background:
      theme.palette.mode === 'dark' ? theme.palette.background.default : '#fff',
    padding: '0 10px',
  },
}));
