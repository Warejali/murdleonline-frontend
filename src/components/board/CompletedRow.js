import LetterCard from './LetterCard';

export default function CompletedRow({ word, solution, animate = false }) {
  const arr = Array.from(Array(5));

  function checkLetter(letter, pos) {
    if (solution.includes(letter)) {
      if (solution[pos] === letter) {
        return 'correct';
      } else {
        return 'present';
      }
    } else {
      return 'absent';
    }
  }
  return arr.map((_, i) => (
    <LetterCard
      key={i}
      letter={word[i]}
      status={checkLetter(word[i], i)}
      animate={animate}
      pos={i}
    />
  ));
}
