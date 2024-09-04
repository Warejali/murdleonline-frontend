import { fiveLetterWords, sevenLetterWords, sixLetterWords } from './words';

function getCookie(cookieName) {
  var name = cookieName + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(';');
  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i];
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return '';
}

function checkCookie(cookieName) {
  var cookieValue = getCookie(cookieName);
  if (cookieValue !== '') return cookieValue;
  else return -1;
}

export const getRandomWord = (wordList) => {
  return Array.from(wordList)[Math.floor(Math.random() * wordList.size)];
};

export const saveWordInCookie = () => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);

  let day = days[date.getDay() - 1];
  let wordFromList = '';
  if (day === 'Mon' || day === 'Tue')
    wordFromList = getRandomWord(fiveLetterWords);
  else if (day === 'Wed' || day === 'Thu')
    wordFromList = getRandomWord(sixLetterWords);
  else if (day === 'Fri' || day === 'Sat')
    wordFromList = getRandomWord(sevenLetterWords);
  else wordFromList = getRandomWord(fiveLetterWords);
  date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + date.toUTCString();
  document.cookie = `wordOfDay=${wordFromList}; ${expires}; path=/`;
  return wordFromList;
};

export const getTodayWord = () => {
  let res = checkCookie('wordOfDay');
  if (res === -1) {
    return saveWordInCookie();
  } else {
    return res;
  }
};

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
