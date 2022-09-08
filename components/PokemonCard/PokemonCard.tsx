/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import Image from 'next/image';
import IPokemon from '../../util/IPoKemon';
import CardContact from '../CardContact/CardContact';
import CardType from '../CardType/CardType';
import styles from './PokemonCard.module.css';

export default function PokemonCard({ pokemon }: { pokemon: IPokemon }) {
  return (
    <div className={styles.container}>
      <div className={styles.container__top}>
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
            && pokemon.types.map((type: string, i: number) => <CardType key={i} type={type} />)}
        </div>
        Pokemon links:
        <div className={styles.container__contactList}>
          {pokemon.contactList.length !== 0
            && pokemon.contactList
              .map((contact: string, i: number) => <CardContact key={i} contact={contact} />)}
        </div>
      </div>
    </div>
  );
}
