import { useEffect, useState } from 'react';

const Card = ({ name }) => {
  const [imgURL, setImgURL] = useState(null);

  useEffect(() => {
    const fetchImg = async () => {
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
      const response = await fetch(url);
      const json = await response.json();
      const imgURL = json.sprites.other['official-artwork'].front_default;
      setImgURL(imgURL);
    };

    fetchImg();
  }, [name]);

  return (
    <div>
      <img src={imgURL} alt='' />
      <p>{name}</p>
    </div>
  );
};

export default Card;
