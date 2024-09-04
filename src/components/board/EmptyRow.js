import LetterCard from './LetterCard';

export default function Row() {
  const arr = Array.from(Array(5));
  return arr.map((_, i) => <LetterCard key={i} value={''} status='empty' />);
}
