import React from 'react';
import LetterCard from './LetterCard';

export default function CurrentRow({ word }) {
  const wordArray = word.split('');

  return (
    <React.Fragment>
      {wordArray.map((letter, i) => (
        <LetterCard key={i} letter={letter} status='empty' />
      ))}
      {Array.from(Array(5 - wordArray.length)).map((letter, i) => (
        <LetterCard key={i} letter={''} status='empty' />
      ))}
    </React.Fragment>
  );
}
