import React, { useContext } from 'react';
import ThemeProvider from './theme';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Wordle from './pages/Wordle';
import Register from './pages/Register';
import Hangman from './pages/Hangman';
import { AuthContext } from './context/authContext';
import GamesHome from './pages/GamesHome';
// import Loading from './components/common/Loading';

export default function App() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <ThemeProvider>
      <Routes>
        <Route path='/' element={<GamesHome />} />
        <Route path='/wordle' element={<Wordle />} />
        <Route path='/hangman' element={<Hangman />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </ThemeProvider>
  );
}
