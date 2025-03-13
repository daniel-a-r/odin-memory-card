import '../styles/Header.css';
import pokemonLogo500 from '../assets/pokemon-500.png';

const Header = () => {
  return (
    <header>
      <img className='logo' src={pokemonLogo500} alt='pokemon logo' />
      <h1>Memory Card</h1>
    </header>
  );
};

export default Header;
