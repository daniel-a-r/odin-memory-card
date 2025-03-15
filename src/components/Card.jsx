import '../styles/Card.css';

const Card = ({ pokemonName, handler, imgURL }) => {
  return (
    <li>
      <button onClick={handler} data-name={pokemonName}>
        <img src={imgURL} alt='' />
        <p>{pokemonName}</p>
      </button>
    </li>
  );
};

export default Card;
