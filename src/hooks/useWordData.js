import { useState, useEffect } from 'react';
import { getTodayWord } from '../utils/manageWordOfDay';

// function checkWordInCookie = document.cookie

export default function useWordData() {
  const [wordOfDay, setWordOfDay] = useState(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      let word = getTodayWord();
      setWordOfDay(word.toLowerCase());
      setFetching(false);
    }, 1000);
  }, []);

  return { wordOfDay, fetching };
}
