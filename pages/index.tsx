import { useRouter } from 'next/router';
import { useState } from 'react';
import Header from '../components/Header/Header';
import Pokeball from '../components/Pokeball/Pokeball';
import Pokemon from '../components/Pokemon/Pokemon';
import getPokemon from '../apiCall/getPokemon';
import IPokemon from '../util/IPoKemon';
import savePokemonAPI from '../apiCall/savePokemonAPI';

/* eslint-disable react/jsx-filename-extension */
export default function Home() {
  const [pokeballClicked, setPokeballClicked] = useState(false);
  const [name, setName] = useState('');
  const [typingNewName, setTypyingNewName] = useState(false);
  const [pokemon, setPokemon] = useState({} as IPokemon);
  const [contact, setContact] = useState('');
  const [typing, setTypying] = useState(false);
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
    setName(pokemonData.name);
    setPokemon(actualPokemon);
  };

  const addContact = () => {
    setPokemon((prev) => ({ ...prev, contactList: [...prev.contactList, contact] }));
    setTypying(false);
    setContact('');
  };

  const changeName = () => {
    setPokemon((prev) => ({ ...prev, name }));
    setTypyingNewName(false);
  };

  const generatePokemon = async () => {
    setPokeballClicked(true);
    await getPokemonData();
  };

  const savePokemon = async () => {
    await savePokemonAPI(pokemon);
    setPokeballClicked(false);
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
            name={name}
            setName={setName}
            typyingNewName={typingNewName}
            setTypyingNewName={setTypyingNewName}
            changeName={changeName}
            typing={typing}
            setTypying={setTypying}
            addContact={addContact}
            savePokemon={savePokemon}
          />
        )
        : (<Pokeball generatePokemon={generatePokemon} />)}
    </div>
  );
}
