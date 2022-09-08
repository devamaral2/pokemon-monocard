/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
import Image from 'next/image';
import PokemonTypes from '../PokemonTypes/PokemonTypes';
import styles from './Pokemon.module.css';

interface IType {
  name: string,
  url: string,
}

export default function Pokemon({ pokemon, getPokemonData }: any) {
  return (
    <main className={styles.container}>
      <div
        className={styles.button__otherPokemon}
        onClick={getPokemonData}
      >
        Escolher outro pokemon
      </div>
      {Object.values(pokemon).length !== 0 && (
        <div className={styles.container__pokemon}>
          <div className={styles.container__pokemon__image}>
            <div
              className={styles.pokemon__image}
            >
              <Image
                width="200px"
                height="200px"
                src={pokemon.sprites.other.dream_world.front_default}
                alt="pokemon "
              />
              <div className={styles.container__types}>
                {pokemon.types.map((type:IType, index: number) => (
                  <PokemonTypes key={index} type={type} />))}
              </div>
            </div>
          </div>
          <h1>{pokemon.name}</h1>
        </div>
      )}
    </main>
  );
}
