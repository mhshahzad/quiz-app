import {
  Box,
  Button,
  Chip,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from '@mui/material';
import React, { FunctionComponent } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface Props {
  startQuiz: any;
}

const StartPage: FunctionComponent<Props> = ({ startQuiz }) => {
  const {
    control,
    formState: { errors }
  } = useFormContext();

  const handleOnStart = () => {
    startQuiz();
  };
  return (
    <Box
      style={{ minHeight: '90vh', minWidth: '90vw' }}
      display="flex"
      justifyContent={'center'}
      alignItems={'center'}>
      <Paper elevation={3} style={{ width: '50%' }}>
        <Grid container spacing={5} style={{ textAlign: 'center', padding: 70 }}>
          <Grid item md={12} lg={12}>
            <Chip
              color={'primary'}
              label={
                <Typography sx={{ p: 6 }} variant={'h6'}>
                  <>{'QUIZ'}</>
                </Typography>
              }
            />
          </Grid>
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
                <ListItem>
                  <ListItemText
                    primary="Notice:"
                    secondary={
                      'There are 10 questions in this quiz and you will have 3 minutes to complete each question.'
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    secondary={
                      "The answer for the question will be saved after pressing 'NEXT' button, once the question is answered you cannot return to it."
                    }
                  />
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid container spacing={3} item md={12} lg={12} justifyContent={'center'}>
            <Grid item md={6} lg={6}>
              <Controller
                control={control}
                name={'type'}
                render={({ field: { onBlur, onChange, value, ref }, fieldState: { error } }) => (
                  <FormControl error={!!error} variant="standard">
                    <FormLabel>Group</FormLabel>
                    <RadioGroup
                        row
                      name={'type'}
                      value={value} 
                      onBlur={onBlur}
                      onChange={(e) => onChange(e)}>
                      <FormControlLabel value="game" control={<Radio />} label="Game" />
                      <FormControlLabel value="normal" control={<Radio />} label="Normal" />
                    </RadioGroup>
                    <FormHelperText>{error?.message}</FormHelperText>
                  </FormControl>
                )}
              />
            </Grid>
            <Grid item md={6} lg={6}>
              <Controller
                name="userId"
                control={control}
                render={({ field: { ref, ...field }, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    sx={{ input: { textAlign: 'center' } }}
                    inputRef={ref}
                    variant="outlined"
                    fullWidth
                    label="User ID"
                    error={!!error}
                    helperText={error?.message}
                    onKeyPress={(e) => e.key === 'Enter' && startQuiz()}
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid container item md={12} lg={12} justifyContent={'center'}>
            <Grid item md={5} lg={5}>
              <Button fullWidth variant={'contained'} onClick={handleOnStart}>
                <Typography variant={'button'}> {'START'}</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default StartPage;
