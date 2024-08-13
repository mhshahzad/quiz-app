import React, { FunctionComponent } from 'react';
import { Box, Typography, Paper } from '@mui/material';

interface Props {
  score: number;
}

const ScoreComponent: FunctionComponent<Props> = ({ score }) => {
  return (
    <Box
      component={Paper}
      sx={{
        borderColor: 'primary',
        borderRadius: '7px',
        border: 1,
        padding: 2
      }}>
      <Typography gutterBottom textAlign={'center'} variant={'overline'}>
        {'Score'}
      </Typography>
      <Typography textAlign={'center'}>{score}</Typography>
    </Box>
  );
};

export default ScoreComponent;
