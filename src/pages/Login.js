import React from 'react';
import { LoginForm } from '../components/forms/LoginForm';
import FormHeader from '../components/forms/FormHeader';
import { Button, Typography } from '@mui/material';

export default function Login() {
  return (
    <React.Fragment>
      <FormHeader formTitle='LOGIN'>
        <LoginForm />
      </FormHeader>
    </React.Fragment>
  );
}
