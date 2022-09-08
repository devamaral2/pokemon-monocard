/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import Image from 'next/image';
import IPokemon from '../../util/IPoKemon';
import CardContact from '../CardContact/CardContact';
import CardType from '../CardType/CardType';
import styles from './PokemonCard.module.css';

export default function PokemonCard({ pokemon, i }: { pokemon: IPokemon, i: number }) {
  return (
    <div data-cy={`card-${i}`} className={styles.container}>
      <div data-cy={`card-name-${i}`} className={styles.container__top}>
        <h2>{pokemon.name}</h2>
        <div className={styles.container__image}>
          <Image
            width="150px"
            height="150px"
            src={pokemon.image}
            alt="pokemon "
          />
        </div>
      </div>
      <div className={styles.container__bottom}>
        Pokemon types:
        <div className={styles.container__types}>
          {pokemon.types.length !== 0
            && pokemon.types
              .map((type: string, index: number) => (
                <CardType key={index} type={type} i={index} fi={i} />))}
        </div>
        Pokemon links:
        <div className={styles.container__contactList}>
          {pokemon.contactList.length !== 0
            && pokemon.contactList
              .map((contact: string, index: number) => (
                <CardContact key={index} contact={contact} i={index} fi={i} />))}
        </div>
      </div>
    </div>
  );
}
