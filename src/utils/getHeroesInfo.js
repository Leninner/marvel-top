import axios from 'axios';

export const getHeroesInfo = async ({ limit = 20, offset = 0 }) => {
  const API_KEY_MARVEL = 'b0edebfacd1123d84391b80fd00cbe55';
  const URL = `https://gateway.marvel.com/v1/public/characters?limit=${limit}&offset=${offset}&apikey=${API_KEY_MARVEL}&hash=b728893e889b727a931f776fccb80d5b&ts=1000`;

  const response = await axios.get(URL);

  return response.data.data;
};
