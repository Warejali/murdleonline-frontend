import { useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import { useWindow } from './useWindow';
import { isValidWord } from '../service';
import { keysFull } from '../utils/keys';
import { AuthContext } from '../context/authContext';
import { StatsContext } from '../context/statsContext';
import useCountDown from './useCountdown';
import useWordData from './useWordData';

// ^ Game status => 0 = playing, 1 = won, -1 = lost

export default function useWordle() {
  const { wordOfDay, fetching, reFetchWord } = useWordData();
  const [turn, setTurn] = useState(1);
  const [currentWord, setCurrentWord] = useState('');
  const [completedWords, setCompletedWords] = useState([]);
  const [gameStatus, setGameStatus] = useState(0);
  const [keyboardLetters, setKeyboardLetters] = useState(
    keysFull.map((el) => ({ ...el, color: 'greySilver' }))
  );
  const { isLoggedIn } = useContext(AuthContext);
  const { saveUserStats } = useContext(StatsContext);
  const [chances, setChances] = useState(2);
  const {
    handleStartCountdown,
    countDownStatus,
    countdownSettings,
    countdownTimer,
  } = useCountDown();
  useWindow('keydown', handleKeyDown);

  useEffect(() => {
    if (fetching) {
      setGameStatus(0);
      setCompletedWords([]);
      setCurrentWord('');
      setTurn(1);
      setKeyboardLetters(
        keysFull.map((el) => ({ ...el, color: 'greySilver' }))
      );
    }
  }, [wordOfDay, isLoggedIn, fetching]);

  useEffect(() => {
    if (chances === 0) {
      handleStartCountdown(1);
      setChances(2);
    }
  }, [chances]);

  function handleKeyDown(event) {
    const key = event.key.toLowerCase();
    onKeyPressed(key);
  }
  function onKeyPressed(key) {
    const k = key?.target?.name || key;

    if (gameStatus !== 0 && !countDownStatus) {
      return;
    }
    if (k === 'backspace' && currentWord.length > 0) {
      onDelete();
      return;
    }
    if (k === 'enter' && currentWord.length === 5 && turn <= 6) {
      onEnter();
      return;
    }
    if (currentWord.length >= 5) return;

    if (/^[A-Za-z]$/.test(k)) {
      onInput(k);
      return;
    }
  }

  function onInput(letter) {
    const newWord = currentWord + letter;
    setCurrentWord(newWord);
  }

  function onDelete() {
    const newWord = currentWord.slice(0, -1);
    setCurrentWord(newWord);
  }

  async function onEnter() {
    if (currentWord === wordOfDay) {
      let kbKeys = keyboardLetters.filter((e) => currentWord.includes(e));

      setCompletedWords([...completedWords, currentWord]);
      setKeyboardLetters((kl) =>
        kl.map((el) => kbKeys.map((el) => el.color === 'green'))
      );
      setGameStatus(1);
      setChances((st) => st - 1);
      saveUserStats(1, true);
      return;
    }
    if (turn === 6) {
      //^ If turn is equal to 6 game over
      setCompletedWords([...completedWords, currentWord]);
      setGameStatus(-1);
      setChances((st) => st - 1);
      saveUserStats(1, false);
      return;
    }
    //^ Validate the word
    const validWord = await isValidWord(currentWord);
    if (currentWord.length === 5 && !validWord)
      return toast.warning('Not a valid word');

    setKeyboardLetters(
      getKeyboardAfterGuess(keyboardLetters, currentWord, wordOfDay)
    );
    setCompletedWords([...completedWords, currentWord]);
    setTurn(turn + 1);
    setCurrentWord('');
  }

  function resetGame() {
    reFetchWord();
  }

  return {
    turn,
    currentWord,
    completedWords,
    gameStatus,
    onKeyPressed,
    chances,
    resetGame,
    fetching,
    reFetchWord,
    wordOfDay,
    countdownSettings,
    countdownTimer,
    keyboardLetters,
  };
}

const getKeyboardAfterGuess = (keyboard, currentWordArray, solution) => {
  let res = [...currentWordArray];
  for (let i = 0; i < res.length; i++) {
    if (res[i] === solution[i]) {
      res[i] = { letter: res[i], color: 'green' };
    } else {
      if (solution.indexOf(res[i]) !== -1) {
        res[i] = { letter: res[i], color: 'red' };
      } else {
        res[i] = { letter: res[i], color: 'grey' };
      }
    }
  }

  let updatedKeyboard = keyboard.slice();
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < updatedKeyboard.length; j++) {
      if (res[i].letter === updatedKeyboard[j].key) {
        updatedKeyboard[j].color =
          updatedKeyboard[j].color !== 'green' ? res[i].color : 'green';
        break;
      }
    }
  }
  return updatedKeyboard;
};

// const toGuessWordLetterCount = (toGuessLetterCount, wordToGuess) => {
//   for (let i = 0; i < wordToGuess.length; i++) {
//     if (toGuessLetterCount.hasOwnProperty(wordToGuess[i])) {
//       toGuessLetterCount[i] = toGuessLetterCount[wordToGuess[i]] + 1;
//     } else {
//       toGuessLetterCount[wordToGuess[i]] = 1;
//     }
//   }
// };

// const guessWordLetterCount = (guessLetterCount, word) => {
//   const lettersColor = [];
//   for (let i = 0; i < word.length; i++) {
//     lettersColor.push({ letter: word[i], color: 'grey' });
//     if (guessLetterCount.hasOwnProperty(word[i])) {
//       guessLetterCount[word[i]] = guessLetterCount[word[i]] + 1;
//     } else {
//       guessLetterCount[word[i]] = 1;
//     }
//   }
//   return lettersColor;
// };

// const calculateColors = (
//   lettersColor,
//   word,
//   wordToGuess,
//   guessLetterCount,
//   toGuessLetterCount
// ) => {
//   let greenCount = 0;
//   const minusCount = {};
//   // ^ Blue color for correct place, red for present but wrong place, grey for not present
//   for (let i = 0; i < word.length; i++) {
//     if (!minusCount.hasOwnProperty(word[i])) {
//       minusCount[word[i]] = guessLetterCount[word[i]];
//     }
//     for (let j = 0; j < wordToGuess.length; j++) {
//       if (word[i] === wordToGuess[j] && i === j) {
//         lettersColor[i] = { letter: word[i], color: 'blue' };
//         greenCount++;
//         break;
//       } else if (
//         word[i] === wordToGuess[j] &&
//         guessLetterCount[word[i]] <= toGuessLetterCount[wordToGuess[j]]
//       ) {
//         lettersColor[i] = { letter: word[i], color: 'red' };
//       } else if (
//         word[i] === wordToGuess[j] &&
//         i !== j &&
//         minusCount[word[i]] > toGuessLetterCount[wordToGuess[j]]
//       ) {
//         lettersColor[i] = { letter: word[i], color: 'grey' };
//         minusCount[word[i]] = minusCount[word[i]] - 1;
//       }
//     }
//   }
//   return greenCount === 5;
// };

// export const compareWord = (word, wordToGuess) => {
//   const guessLetterCount = {};
//   const toGuessLetterCount = {};

//   toGuessWordLetterCount(toGuessLetterCount, wordToGuess);
//   let lettersColor = guessWordLetterCount(guessLetterCount, word);

//   return lettersColor;
// };
