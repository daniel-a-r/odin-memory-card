import '../styles/App.css';
import Header from './Header.jsx';
import Score from './Score.jsx';
import Cards from './Cards.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';

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

    const extractData = (response) => {
      const name = response.data.name;
      const nameFormatted = name.at(0).toUpperCase() + name.slice(1);
      const imgURL =
        response.data.sprites.other['official-artwork'].front_default;
      return { name: nameFormatted, imgURL };
    };

    const getPokemonData = async (pokemonList) => {
      const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
      const promises = pokemonList.map((pokemon) =>
        axios.get(`${baseURL}${pokemon}`),
      );
      const responses = await Promise.all(promises);
      const pokemonData = responses.map((response) => extractData(response));
      setPokemonDataList([...pokemonData]);
    };

    getPokemonData(pokemonList);
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
