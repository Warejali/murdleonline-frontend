import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import Logo from '../common/Logo';
import { useNavigate } from 'react-router-dom';
import Footer from '../common/Footer';
import ThemeModeIcon from '../common/ThemeModeIcon';
import HomeIcon from '@mui/icons-material/Home';

export default function FormHeader(props) {
  const { formTitle } = props;
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <AppBar elevation={1} position='static' color='default'>
        <Toolbar>
          <ThemeModeIcon />
          <Box flex={1} textAlign='center'>
            <Logo title='Murdle' marginLeft={-5} />
          </Box>
          <IconButton color='inherit' onClick={() => navigate('/')}>
            <HomeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container maxWidth='xs'>
        <Box
          className='dispFlexJusAlgCent'
          gap='1rem'
          flexDirection='column'
          height='100%'
          width='100%'
          sx={{ marginBlock: { xs: '2rem', sm: '4rem' } }}
        >
          <Typography variant='h3'>{formTitle}</Typography>
          <Typography variant='body1' component='h5' align='center'>
            Your game stats will be linked to your account and will update
            wherever you play.
          </Typography>
          {props.children}
        </Box>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
