import React, { FunctionComponent } from 'react';
import { Box, Button, Grid, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

interface Props {
  onReset: () => void;
}

const FinishPage: FunctionComponent<Props> = ({ onReset }) => {
  return (
    <Box
      style={{ minHeight: '90vh', minWidth: '90vw' }}
      display="flex"
      justifyContent={'center'}
      alignItems={'center'}>
      <Paper elevation={3} style={{ width: '50%' }}>
        <Grid container spacing={5} style={{ textAlign: 'center', padding: 70 }}>
          <Grid item md={12} lg={12}>
            <Box
              component={Paper}
              sx={{
                borderColor: 'primary',
                borderRadius: '7px',
                border: 1,
                padding: 3
              }}>
              <List>
                <ListItem style={{ textAlign: 'center' }}>
                  <ListItemText primary="Thanks for your participation" />
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid container item md={12} lg={12} justifyContent={'center'}>
            <Grid item md={5} lg={5}>
              <Button fullWidth variant={'contained'} onClick={onReset}>
                <Typography variant={'button'}> {'Start Over'}</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default FinishPage;
