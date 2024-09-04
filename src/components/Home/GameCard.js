import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { alpha, CardActionArea, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const GameCard = ({ img, url }) => {
  const navigate = useNavigate();

  return (
    <>
      <Card
        sx={{
          boxShadow: (theme) =>
            `0px 0px 1.8px ${alpha(
              theme.palette.secondary.main,
              0.042
            )}, 0px 0px 5px ${alpha(
              theme.palette.secondary.main,
              0.06
            )}, 0px 0px 12.1px ${alpha(
              theme.palette.secondary.main,
              0.078
            )}, 0px 0px 40px ${alpha(theme.palette.secondary.main, 0.12)}`,
        }}
      >
        <CardAreaExt backimage={img} onClick={() => navigate(url)} />
      </Card>
    </>
  );
};

const CardAreaExt = styled(CardActionArea, {
  shouldForwardProp: (prop) => prop !== 'backimage',
})(({ backimage, theme }) => ({
  // height: '100%',
  backgroundImage: `url(${backimage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'top center',
  position: 'relative',

  height: 270,
  // width: 500,

  [theme.breakpoints.down('md')]: {
    height: 300,
  },
  [theme.breakpoints.down('md')]: {
    height: 300,
  },
  '& img': {
    objectFit: 'contain',
    width: 300,
    height: 'fit-content',
    position: 'absolute',
    bottom: '10px',
    [theme.breakpoints.down('md')]: {
      width: 300,
    },
  },
}));
