import React, { FunctionComponent } from 'react';
import { Grid, Paper, TextField, Typography } from '@mui/material';
import { Control, Controller } from 'react-hook-form';

interface Props {
  nextQuestion: () => void;
  question: string;
  control: Control<any>;
}

const QuestionFormText: FunctionComponent<Props> = ({ question, control }) => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item md={12} lg={12}>
          <Paper elevation={2}>
            <Typography sx={{ p: 3 }} variant={'h5'}>
              {question}
            </Typography>
          </Paper>
        </Grid>
        <Grid item md={12} lg={12}>
          <Paper elevation={2}>
            <Controller
              name="answer"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  sx={{ p: 0, m: 0 }}
                  fullWidth
                  label="Answer"
                  multiline
                  rows={10}
                  margin="normal"
                  inputProps={{ style: { fontSize: 25 } }}
                  error={!!error}
                  helperText={error?.message}
                  {...field}
                />
              )}
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default QuestionFormText;
