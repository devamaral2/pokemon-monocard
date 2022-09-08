import axios from 'axios';
import IPokemon from '../util/IPoKemon';

export default async function savePokemonAPI(pokemon: IPokemon) {
  await axios.post('/api/pokemon', pokemon).then((res) => res);
}
