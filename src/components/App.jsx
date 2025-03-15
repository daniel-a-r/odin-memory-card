import '../styles/App.css';
import Header from './Header.jsx';
import Score from './Score.jsx';
import Cards from './Cards.jsx';
import { useEffect, useState } from 'react';

function App() {
  const [clickedCards, setClickedCards] = useState(new Set());
  const [pokemonDataList, setPokemonDataList] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
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

    const fetchImgURL = async (pokemonName) => {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
      const response = await fetch(url);
      const json = await response.json();
      const imgURL = json.sprites.other['official-artwork'].front_default;
      return imgURL;
    };

    const fetchAllImgURLs = (pokemonList) => {
      pokemonList.map(async (pokemon) => {
        const imgURL = await fetchImgURL(pokemon);
        setPokemonDataList((list) => {
          if (!list.map((item) => item.name).includes(pokemon)) {
            return [...list, { name: pokemon, imgURL }];
          }
          return [...list];
        });
      });
    };

    fetchAllImgURLs(pokemonList);
  }, []);

  const handleSelectCard = (e) => {
    const elem = e.currentTarget;
    const pokemonName = elem.dataset.name;
    if (clickedCards.has(pokemonName)) {
      setClickedCards(new Set());
      setCurrentScore(0);
    } else {
      const newScore = currentScore + 1;
      setClickedCards(new Set([...clickedCards, pokemonName]));
      setCurrentScore(newScore);
      if (newScore > bestScore) {
        setBestScore(newScore);
      }
    }
  };

  return (
    <>
      <Header />
      <Score currentScore={currentScore} bestScore={bestScore} />
      <Cards handler={handleSelectCard} pokemonDataList={pokemonDataList} />
    </>
  );
}

export default App;
