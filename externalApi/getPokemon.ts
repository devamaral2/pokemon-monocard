import axios from 'axios';

export default async function getPokemon() {
  const num = Math.floor(Math.random() * 151);
  const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`).then((res) => res);
  return pokemon.data;
}
