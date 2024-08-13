import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  Paper,
  Typography
} from '@mui/material';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faCoins, faMedal, faTrophy } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { apiLink, config } from '../constants/api';

interface Props {
  userScore: any;
}

const Leaderboard: FunctionComponent<Props> = ({ userScore }) => {
  const [score, setScore] = useState<Record<string, any>[]>();

  useEffect(() => {
    void getScore();
  }, [userScore]);

  const getScore = async () => {
    await axios.get(apiLink, config).then((response) => {
      const sum = calculateScore(response.data.data);
      setScore(sum);
    });
  };

  const calculateScore = (data: any[]) => {
    const unique = [...new Set(data.map((x) => x.attributes.user_id))];
    const result: any[] = [];
    unique.forEach((id) => {
      let sum = 0;
      const filteredById = data.filter((value) => value.attributes.user_id === id);
      filteredById.forEach((item) => {
        if (item.attributes.is_correct === 'true') {
          sum += 10;
        }
      });
      result.push({ id, sum });
    });
    return result.sort((a, b) => b.sum - a.sum);
  };

  const renderIcon = (sum: number) => {
    if (sum === 50) {
      return faTrophy;
    } else if (sum === 40) {
      return faMedal;
    } else if (sum === 30) {
      return faAward;
    } else {
      return faCoins;
    }
  };

  // const renderToast = (sum: number) => {
  //   if (sum === 50) {
  //     return toast('Congratulations, you have unlocked a trophy 🏆!', {
  //       position: 'top-center',
  //       autoClose: 2000,
  //       hideProgressBar: true,
  //       closeOnClick: false,
  //       pauseOnHover: false,
  //       draggable: false,
  //       theme: 'light'
  //     });
  //   } else if (sum === 40) {
  //     return toast('Congratulations, you have unlocked a medal 🏅!', {
  //       position: 'top-center',
  //       autoClose: 2000,
  //       hideProgressBar: true,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       theme: 'light'
  //     });
  //   } else if (sum === 30) {
  //     return toast('Congratulations, you have unlocked an award 🏅!', {
  //       position: 'top-center',
  //       autoClose: 2000,
  //       hideProgressBar: true,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       theme: 'light'
  //     });
  //   }
  // };

  return (
    <Box
      component={Paper}
      sx={{
        borderColor: 'primary',
        borderRadius: '7px',
        border: 1,
        padding: 2,
        height: '80vh'
      }}>
      <List
        style={{ maxHeight: '100%', overflow: 'auto' }}
        component={'nav'}
        subheader={
          <ListSubheader component="div">
            <Typography textAlign={'center'} variant={'body2'}>
              LEADERBOARD
            </Typography>
          </ListSubheader>
        }>
        {score?.map((object, index) => (
          <div key={index}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>{index + 1}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={object.id} secondary={object.sum} />
              <FontAwesomeIcon
                icon={renderIcon(object.sum)}
                size={'lg'}
                style={{ color: 'goldenrod' }}
              />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </Box>
  );
};

export default Leaderboard;
