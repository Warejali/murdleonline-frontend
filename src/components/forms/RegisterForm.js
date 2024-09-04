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
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { AuthContext } from '../../context/authContext';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { API_BASE_URL, handleCatch } from '../../utils/makeReq';
import LoadingButton from '@mui/lab/LoadingButton';

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const [showPassword, setShowPassword] = useState(false);
  const { isLoggedIn, saveUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`${API_BASE_URL}/auth/signup`, {
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
  }, [isLoggedIn]);

  return (
    <Box width='inherit' mt={7}>
      <form onSubmit={handleFormSubmit}>
        <Box display='flex' gap='1.5rem' flexDirection='column'>
          <TextField
            name='firstName'
            label='First Name'
            variant='outlined'
            value={formValues.firstName}
            onChange={handleFormValueChange}
            required
          />
          <TextField
            name='lastName'
            label='Last Name'
            variant='outlined'
            value={formValues.lastName}
            onChange={handleFormValueChange}
            required
          />
          <TextField
            name='email'
            label='Email'
            variant='outlined'
            value={formValues.email}
            onChange={handleFormValueChange}
            required
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
              required
            />
          </FormControl>

          <LoadingButton
            type='submit'
            loading={loading}
            variant='contained'
            color='primary'
          >
            Submit
          </LoadingButton>

          <Box display='border-box'>
            <HorlineWithWord variant='subtitle1'>
              <span>or</span>
            </HorlineWithWord>
          </Box>
          <Button
            variant='outlined'
            color='secondary'
            onClick={() => navigate('/login')}
          >
            LOGIN
          </Button>
        </Box>
      </form>
    </Box>
  );
};

const HorlineWithWord = styled(Typography)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  borderBottom: `1px solid ${theme.palette.text.primary}`,
  lineHeight: 0,
  margin: '10px 0 20px',

  '& span': {
    background: theme.palette.background.default,
    padding: '0 10px',
  },
}));
