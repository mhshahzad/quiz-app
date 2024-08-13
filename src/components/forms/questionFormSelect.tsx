import React, { FunctionComponent } from 'react';
import { Box, FormControlLabel, Grid, Paper, Radio, RadioGroup, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';

interface Props {
  nextQuestion: () => void;
  question: string;
  choices: string[];
  control: any;
}

const QuestionFormSelect: FunctionComponent<Props> = ({ question, choices, control }) => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item md={12} lg={12}>
          <Paper elevation={2}>
            <Typography sx={{ p: 3 }} variant={'h5'} align={'center'}>
              <pre style={{ fontFamily: 'inherit' }}>{question}</pre>
            </Typography>
          </Paper>
        </Grid>
        <Grid container item md={12} lg={12} justifyItems={'center'}>
          <Controller
            rules={{ required: true }}
            control={control}
            name="answer"
            render={({ field }) => (
              <RadioGroup {...field}>
                <Grid container spacing={2}>
                  {choices.map((value: string, index: number) => (
                    <Grid item md={12} lg={12} key={index}>
                      <FormControlLabel
                        value={value}
                        control={<Radio />}
                        label={
                          <Box component={Paper} sx={{ width: '90vw' }}>
                            <Typography variant={'h6'} sx={{ p: 3 }} align={'center'}>
                              {value}
                            </Typography>
                          </Box>
                        }
                      />
                    </Grid>
                  ))}
                </Grid>
              </RadioGroup>
            )}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default QuestionFormSelect;
