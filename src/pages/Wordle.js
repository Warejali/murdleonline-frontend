import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../components/common/NavBar';
import KeyboardGrid from '../components/keyboard/KeyboardGrid';
import RowCompleted from '../components/board/CompletedRow';
import RowCurrent from '../components/board/CurrentRow';
import RowEmpty from '../components/board/EmptyRow';
import {
  GameContainer,
  LettersGridCont,
} from '../components/board/board.styled';
import StatsDialog from '../components/Dialogs/StatsDialog';
import { keyboardKeys } from '../components/keyboard/Keys';
import useWordData from '../hooks/useWordData';
import Loading from '../components/common/Loading';
import useWordle from '../hooks/useWordle';
import { StatsContext } from '../context/statsContext';
import { AuthContext } from '../context/authContext';
import { Box, Button, Typography } from '@mui/material';
import useCountDown from '../hooks/useCountdown';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Wordle() {
  const {
    turn,
    currentWord,
    completedWords,
    gameStatus,
    onKeyPressed,
    chances,
    resetGame,
    wordOfDay,
    fetching,
    countdownSettings,
    countdownTimer,
    keyboardLetters,
  } = useWordle();
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <NavBar title='Wordle' />
      {fetching ? (
        <Loading />
      ) : (
        <>
          <Box position='relative' mt={11}>
            <GameContainer className='dispFlexJusAlgCent'>
              <LettersGridCont>
                {completedWords.map((word, i) => (
                  <RowCompleted
                    key={i}
                    word={word}
                    solution={wordOfDay}
                    animate={true}
                  />
                ))}
                {gameStatus === 0 ? <RowCurrent word={currentWord} /> : null}
                {Array.from(Array(6 - turn)).map((_, i) => (
                  <RowEmpty key={i} />
                ))}
              </LettersGridCont>
              {gameStatus === 1 ? (
                <>
                  <Typography variant='h4' mt={4}>
                    You have guessed the word in {turn} try
                  </Typography>
                  {countdownSettings?.timeleft &&
                  countdownSettings?.gameId === 1 ? (
                    !countdownSettings.timeleft && (
                      <Button
                        variant='contained'
                        color='primary'
                        onClick={resetGame}
                      >
                        Play Again
                      </Button>
                    )
                  ) : (
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={resetGame}
                    >
                      Play Again
                    </Button>
                  )}
                </>
              ) : gameStatus === -1 ? (
                <>
                  <Typography variant='h4' mt={4}>
                    You haven't guessed the word.
                  </Typography>
                  <Typography variant='h4'>
                    Correct Word :- {wordOfDay.toUpperCase()}
                  </Typography>
                  {countdownSettings?.timeleft &&
                  countdownSettings?.gameId === 1 ? (
                    !countdownSettings.timeleft && (
                      <Button
                        variant='contained'
                        color='primary'
                        onClick={resetGame}
                      >
                        Play Again
                      </Button>
                    )
                  ) : (
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={resetGame}
                    >
                      Play Again
                    </Button>
                  )}
                </>
              ) : (
                <KeyboardGrid
                  keys={keyboardLetters}
                  onKeyPressed={onKeyPressed}
                />
              )}
            </GameContainer>
            <Box
              position='absolute'
              top='-9%'
              left='50%'
              minWidth='90px'
              sx={{ transform: 'translateX(-50%)' }}
              display='flex'
              gap={1}
              alignItems='center'
              justifyContent='center'
            >
              <FavoriteIcon fontSize='medium' />
              <Typography variant='h5'>
                {countdownSettings?.timeleft &&
                countdownSettings?.gameId === 1 &&
                countdownTimer ? (
                  <>
                    {countdownTimer?.hours > 0 &&
                      `${countdownTimer?.hours}h : `}
                    {countdownTimer?.mins > 0 && `${countdownTimer?.mins}m : `}
                    {countdownTimer?.secs > 0 && `${countdownTimer?.secs}s `}
                  </>
                ) : (
                  chances
                )}
              </Typography>
            </Box>
          </Box>
          <StatsDialog open={open} toggleDialog={() => setOpen((st) => !st)} />
        </>
      )}
    </React.Fragment>
  );
}
