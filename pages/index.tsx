import { useRouter } from 'next/router';
import { useState } from 'react';
import Header from '../components/Header/Header';
import Pokeball from '../components/Pokeball/Pokeball';
import Pokemon from '../components/Pokemon/Pokemon';
import getPokemon from '../externalApi/getPokemon';
import { IPokemon } from '../util/IPolemon';

/* eslint-disable react/jsx-filename-extension */
export default function Home() {
  const [pokeballClicked, setPokeballClicked] = useState(false);
  const [pokemon, setPokemon] = useState({} as IPokemon);
  const [contact, setContact] = useState('');
  const router = useRouter();

  const getPokemonData = async () => {
    const pokemonData = await getPokemon();
    const actualPokemon = {
      name: pokemonData.name,
      pokemonId: pokemonData.id,
      image: pokemonData.sprites.other.dream_world.front_default,
      contactList: [],
      types: pokemonData.types.map((type: any) => type.type.name),
    };
    setPokemon(actualPokemon);
  };

  const generatePokemon = async () => {
    setPokeballClicked(true);
    await getPokemonData();
  };

  return (
    <div className="container">
      <Header pathname={router.pathname} />
      { pokeballClicked
        ? (
          <Pokemon
            getPokemonData={getPokemonData}
            pokemon={pokemon}
            contact={contact}
            setContact={setContact}
          />
        )
        : (<Pokeball generatePokemon={generatePokemon} />)}
    </div>
  );
}
