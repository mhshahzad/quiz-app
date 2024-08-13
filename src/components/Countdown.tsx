import React, { FunctionComponent, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Box, Paper, Typography } from '@mui/material';
import { TimeConverter } from './utils/time-converter';
import { Time } from '../constants/time';

interface Props {
  timeOver: (value: number) => void;
  setTimeTaken: (value: number) => void;
  resetTimer: any;
  lastQuestion: boolean;
}

const Countdown: FunctionComponent<Props> = ({
  timeOver,
  setTimeTaken,
  resetTimer,
  lastQuestion
}) => {
  const countdownTime = Time.hours + Time.minutes + Time.seconds;
  const totalTime = countdownTime * 1000;
  const [timerTime, setTimerTime] = useState(totalTime);
  const { hours, minutes, seconds } = TimeConverter(timerTime);

  useEffect(() => {
    setTimerTime(totalTime);
  }, [resetTimer]);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = timerTime - 1000;

      if (newTime >= 0) {
        setTimerTime(newTime);
      } else {
        if (lastQuestion) {
          clearInterval(timer);
          setTimerTime(0);
        } else {
          clearInterval(timer);
          void Swal.fire({
            title: `Time's up`,
            confirmButtonText: 'Next Question',
            icon: 'warning',
            timer: 3000,
            willClose: () => timeOver(-1)
          });
          setTimerTime(0);
        }
      }
    }, 1000);

    return () => {
      clearInterval(timer);
      setTimeTaken(totalTime - timerTime + 1000);
    };
  }, [timerTime]);

  return (
    <Box
      component={Paper}
      sx={{
        borderColor: 'primary',
        borderRadius: '7px',
        border: 1,
        padding: 2
      }}>
      <Typography textAlign={'center'}>
        <Typography variant={'overline'} gutterBottom>
          {'Time Remaining'}
        </Typography>
      </Typography>
      <Typography textAlign={'center'}>
        {hours} : {minutes} : {seconds}
      </Typography>
    </Box>
  );
};

export default Countdown;
