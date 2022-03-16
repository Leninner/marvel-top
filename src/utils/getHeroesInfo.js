import axios from 'axios';

export const getHeroesInfo = async () => {
  const API_KEY_MARVEL = 'b0edebfacd1123d84391b80fd00cbe55';
  const URL = `https://gateway.marvel.com:443/v1/public/characters?apikey=${API_KEY_MARVEL}`;

  const response = await axios.get(URL);
  console.log(response);
};
