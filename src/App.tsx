import React, { useState } from 'react';
import StartPage from './components/pages/start.page';
import {
  Backdrop,
  Box,
  CircularProgress,
  Grid,
} from '@mui/material';
import QuizPage from './components/pages/quiz.page';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormSchema } from './components/schema';
import FinishPage from './components/pages/thanks.page';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Leaderboard from './components/Leaderboard';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const App = () => {
  const [isQuiz, setIsQuiz] = useState(false);
  const [isStart, setIsStart] = useState(true);
  const [isFinish, setIsFinish] = useState(false);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState<any>();
  const language = 'eng';

  const methods = useForm({
    defaultValues: {
      answer: '',
      userId: '',
      type: ''
    },
    mode: 'onChange',
    resolver: yupResolver(FormSchema)
  });

  const startQuiz = async () => {
    await methods.trigger(['userId', 'type']);
    if (Object.keys(methods.formState.errors).length === 0) {
      setLoading(false);
      setIsStart(false);
      setIsQuiz(true);
    }
  };

  const endQuiz = async () => {
    methods.reset({
      answer: ''
    });
    setIsQuiz(false);
    setIsFinish(true);
  };

  const onReset = () => {
    setIsFinish(true);
    setIsStart(true);
  };

  const renderPages = () => {
    if (!loading) {
      if (isStart) {
        return <StartPage startQuiz={startQuiz} />;
      }
      if (isQuiz) {
        if (methods.getValues('type') === 'game') {
          return (
            <Grid container>
              <Grid item md={9} lg={9}>
                <QuizPage endQuiz={endQuiz} modifyScore={setScore} lang={language} />
              </Grid>
              <Grid item md={3} lg={3}>
                <Box sx={{ p: 3 }}>
                  <Leaderboard userScore={score} />
                </Box>
              </Grid>
            </Grid>
          );
        } else {
          return (
            <Grid container>
              <Grid item md={12} lg={12}>
                <QuizPage endQuiz={endQuiz} modifyScore={setScore} lang={language} />
              </Grid>
            </Grid>
          );
        }
      }
      if (isFinish) {
        return <FinishPage onReset={onReset} />;
      }
    }
  };

  return (
    <div className={'App'} id={'app'}>
      <FormProvider {...methods}>{renderPages()}</FormProvider>
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
        <CircularProgress color="secondary" />
      </Backdrop>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={true}
        rtl={false}
        theme="light"
      />
    </div>
  );
};

export default App;
