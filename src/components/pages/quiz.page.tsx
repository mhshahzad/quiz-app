import React, { FunctionComponent, useState } from 'react';
import { Box, Button, Chip, Grid, Typography } from '@mui/material';
import Countdown from '../Countdown';
import { useFormContext } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import ScoreComponent from '../Score';
import QuestionFormSelect from '../forms/questionFormSelect';
import { QuestionsEnglish } from '../../constants/questions-eng';
import QuestionFormSelectGame from '../forms/questionFormSelect-game';
import { apiLink, config } from '../../constants/api';

interface Props {
  endQuiz: any;
  modifyScore: (score: any) => void;
  lang: 'turk' | 'eng';
}

const QuizPage: FunctionComponent<Props> = ({ endQuiz, modifyScore, lang }) => {
  const { control, getValues, setValue } = useFormContext();
  const [timeTaken, setTimeTaken] = useState<number>(0);
  const [question, setQuestion] = useState<{
    question: string;
    options: string[];
    correct: string;
  }>(QuestionsEnglish[0]);
  const [score, setScore] = useState<number>(0);
  const [index, setIndex] = useState(1);
  const [resetTimer, setResetTimer] = useState<boolean>(false);
  const [lastQuestion, setLastQuestion] = useState<boolean>(false);

  const sendResponse = async () => {
    await axios
      .post(
        apiLink,
        {
          data: {
            user_id: getValues('userId'),
            answer: getValues('answer').replace(/\n/g, ' '),
            question: question.question,
            type: getValues('type'),
            is_correct: getValues('answer') === question.correct ? 'true' : 'false',
            score: getValues('answer') === question.correct ? 10 : 0,
            time_taken: timeTaken / 1000
          }
        },
        config
      )
      .then(() => {
        toast.success('Answer saved!');
      })
      .catch(() => {
        toast.error('Answer could not be saved!');
      });
  };

  const handleNextQuestion = async (value: number) => {
    if (index === QuestionsEnglish.length) {
      setLastQuestion(true);
    }

    if (index + 1 <= QuestionsEnglish.length) {
      await sendResponse();
      if (getValues('answer') === question.correct) {
        modifyScore(score + 10);
        setScore(score + 10);
      } else {
        modifyScore(score + 0);
        setScore(score + 0);
      }
      setIndex(index + 1);
      setValue('answer', '');
      setQuestion(lang === 'turk' ? QuestionsEnglish[index] : QuestionsEnglish[index]);
      setResetTimer(!resetTimer);
    }

    if (index + 1 > QuestionsEnglish.length) {
      handleEndQuiz();
    }
  };

  const handleEndQuiz = async () => {
    await sendResponse();
    toast.success('Quiz Finished Successfully!');
    endQuiz();
  };

  return (
    <>
      <Grid container spacing={5} sx={{ paddingLeft: 8, paddingRight: 8, paddingTop: 6 }}>
        <Grid item md={4} lg={4}>
          <Chip
            sx={{ mt: 7, ml: 4 }}
            color={'primary'}
            label={
              <Typography sx={{ p: 4 }} variant={'h6'}>
                Question: {index} of {QuestionsEnglish.length}
              </Typography>
            }
          />
        </Grid>
        <Grid container spacing={3} item md={8} lg={8} justifyContent={'flex-end'}>
          {getValues('type')?.localeCompare('game') === 0 && (
            <Grid item md={2} lg={2}>
              <ScoreComponent score={score} />
            </Grid>
          )}
          <Grid item md={4} lg={4}>
            <Countdown
              timeOver={() => handleNextQuestion(-1)}
              setTimeTaken={setTimeTaken}
              resetTimer={resetTimer}
              lastQuestion={lastQuestion}
            />
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ paddingLeft: 4, paddingRight: 0, paddingTop: '5vh' }}>
        <Grid container spacing={3} justifyContent={'flex-end'}>
          <Grid item md={12} lg={12}>
            {getValues('type')?.localeCompare('game') === 0 ? (
              <QuestionFormSelectGame
                control={control}
                nextQuestion={() => handleNextQuestion(0)}
                question={question.question}
                choices={question.options}
              />
            ) : (
              <QuestionFormSelect
                control={control}
                nextQuestion={() => handleNextQuestion(0)}
                question={question.question}
                choices={question.options}
              />
            )}
          </Grid>
          <Grid item md={12} lg={12}>
            {index === QuestionsEnglish.length ? (
              <Button fullWidth variant={'contained'} onClick={handleEndQuiz}>
                <Typography variant={'button'}> {'Finish Quiz'}</Typography>
              </Button>
            ) : (
              <Button fullWidth variant={'contained'} onClick={() => handleNextQuestion(0)}>
                <Typography variant={'button'}> {'Next'}</Typography>
              </Button>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default QuizPage;
