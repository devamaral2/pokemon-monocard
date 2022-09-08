import { useRouter } from 'next/router';
import { useState } from 'react';
import Header from '../components/Header/Header';
import Pokeball from '../components/Pokeball/Pokeball';
import Pokemon from '../components/Pokemon/Pokemon';
import getPokemon from '../externalApi/getPokemon';

/* eslint-disable react/jsx-filename-extension */
export default function Home() {
  const [pokeballClicked, setPokeballClicked] = useState(false);
  const [pokemon, setPokemon] = useState({} as any);
  const router = useRouter();

  const getPokemonData = async () => {
    const pokemonData = await getPokemon();
    setPokemon(pokemonData);
  };

  const generatePokemon = async () => {
    setPokeballClicked(true);
    await getPokemonData();
  };

  return (
    <div className="container">
      <Header pathname={router.pathname} />
      { pokeballClicked
        ? (<Pokemon
            getPokemonData={getPokemonData} 
            pokemon={pokemon} 
          />)
        : (<Pokeball generatePokemon={generatePokemon} />)}
    </div>
  );
}
