import axios from 'axios';

export default async function getPokemonsListAPI() {
  const pokemons = await axios.get('/api/pokemon').then((res) => res);
  return pokemons.data;
}
