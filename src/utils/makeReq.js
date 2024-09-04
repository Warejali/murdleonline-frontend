import { toast } from 'react-toastify';

// * Development URLs
const API_BASE_URL = `http://localhost:5000`;

const handleCatch = (err) => {
  let errMsg = 'Something Went Wrong';
  if (err.response?.data?.message) errMsg = err.response.data.message;
  else if (err.message) errMsg = err.message;
  toast.error(errMsg);
};

const makeReq = async (
  endpoint,
  { body, ...customConfig } = {},
  method = 'GET'
) => {
  const token = localStorage.getItem('game-token');
  const headers = { 'Content-Type': 'application/json' };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const config = {
    method: method,
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const res = await fetch(`${API_BASE_URL}${endpoint}`, config);
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    return Promise.reject(data);
  }
};

export { API_BASE_URL, makeReq, handleCatch };
