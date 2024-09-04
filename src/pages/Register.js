import React from 'react';
import { RegisterForm } from '../components/forms/RegisterForm';
import FormHeader from '../components/forms/FormHeader';
import { styled, Typography } from '@mui/material';

export default function Register() {
  return (
    <React.Fragment>
      <FormHeader formTitle='JOIN'>
        <RegisterForm />
      </FormHeader>
    </React.Fragment>
  );
}
