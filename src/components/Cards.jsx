import Card from './Card.jsx';
import '../styles/Cards.css';

const Cards = ({ handler, pokemonDataList }) => {
  const shufflePokemonList = (list) => {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  };

  const shuffledList = shufflePokemonList(pokemonDataList);

  const pokemonCardList = shuffledList.map((pokemonData) => {
    return (
      <Card
        key={pokemonData.name}
        pokemonName={pokemonData.name}
        imgURL={pokemonData.imgURL}
        handler={handler}
      />
    );
  });

  return <ul>{pokemonCardList}</ul>;
};

export default Cards;
