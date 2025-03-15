import '../styles/Score.css';

const Score = ({ currentScore, bestScore }) => {
  return (
    <section className='scores'>
      <h2 className='current-score'>Current Score: {currentScore}</h2>
      <h2 className='best-score'>Best Score: {bestScore}</h2>
    </section>
  );
};

export default Score;
