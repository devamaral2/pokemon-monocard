/* eslint-disable react/no-array-index-key */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import getPokemonsListAPI from '../apiCall/getPokemonsListAPI';
import Header from '../components/Header/Header';
import PokemonCard from '../components/PokemonCard/PokemonCard';
import IPokemon from '../util/IPoKemon';

/* eslint-disable react/jsx-filename-extension */
export default function List() {
  const [pokemons, setPokemons] = useState([]);
  const getPokemons = async () => {
    const pokemonsData = await getPokemonsListAPI();
    setPokemons(pokemonsData);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const router = useRouter();
  return (
    <div className="container">
      <Header pathname={router.pathname} />
      <div className="container__savedList">
        {pokemons.map((entry: IPokemon, i: number) => <PokemonCard key={i} pokemon={entry} />)}
      </div>
    </div>
  );
}
