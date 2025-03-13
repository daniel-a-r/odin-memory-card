import Card from './Card.jsx';

const Cards = () => {
  const pokemonList = [
    'Charizard',
    'Lucario',
    'Umbreon',
    'Pikachu',
    'Eevee',
    'Dragonite',
    'Arcanine',
    'Blaziken',
    'Mew',
    'Gengar',
    'Typhlosion',
    'Absol',
    'Darkrai',
    'Espeon',
    'Mewtwo',
    'Scizor',
  ];

  const pokemonCardList = pokemonList.map((pokemon) => {
    return <Card key={pokemon} name={pokemon} />;
  });

  return <div>{pokemonCardList}</div>;
};

export default Cards;
