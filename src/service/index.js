import { toast } from 'react-toastify';

const APP_BASE_URL = 'http://localhost:3005/';

export async function isValidWord(word) {
  try {
    const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word;
    const response = await fetch(URL);
    if (response.status !== 200) throw new Error('Request Failed');
    const json = await response.json();

    return json.length;
  } catch (e) {
    return false;
  }
}
