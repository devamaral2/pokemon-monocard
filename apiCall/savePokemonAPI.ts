import axios from 'axios';
import IPokemon from '../util/IPolemon';

export default async function savePokemonAPI(pokemon: IPokemon) {
  await axios.post('/api/pokemon', pokemon).then((res) => res);
}
