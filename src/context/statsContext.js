import React, { useContext, useState, useEffect, createContext } from 'react';

import axios from 'axios';
import { makeReq, handleCatch } from '../utils/makeReq';
import { AuthContext } from './authContext';
import calcWinLoss from '../utils/calcWinLoss';

export const StatsContext = createContext();
const statsToken = 'game-stats';

export const StatsProvider = ({ children }) => {
  const { isLoggedIn, user, isFetching } = useContext(AuthContext);
  const [userStats, setUserStats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isFetching) return;
    if (isLoggedIn) {
      (async () => {
        setLoading(true);
        try {
          const resData = await makeReq(`/stats/user/${user.id}`);
          setUserStats(resData.data);
        } catch (err) {
          handleCatch(err);
          setError(err);
        } finally {
          setLoading(false);
        }
      })();
    } else {
      let stats = window.localStorage.getItem('game-stats');
      if (stats) setUserStats([JSON.parse(stats)]);
      else setUserStats([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching, isLoggedIn]);

  const saveUserStats = async (gameId, gameStatus) => {
    if (isLoggedIn) {
      setLoading(true);
      try {
        const resData = await makeReq(
          '/stats',
          { body: { user_id: user.id, won: gameStatus, game: gameId } },
          'POST'
        );
        setUserStats([resData.data]);
      } catch (err) {
        handleCatch(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    } else {
      setUserStats([calcWinLoss(gameStatus, gameId)]);
    }
  };

  return (
    <StatsContext.Provider value={{ saveUserStats, loading, error, userStats }}>
      {children}
    </StatsContext.Provider>
  );
};
