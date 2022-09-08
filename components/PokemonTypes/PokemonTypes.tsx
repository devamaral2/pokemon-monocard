/* eslint-disable react/jsx-filename-extension */
import Image from 'next/image';
import styles from './PokemonTypes.module.css';

export default function PokemonTypes({ type }: { type: string }) {
  return (
    <div className={styles.container__types}>
      <Image
        width="40px"
        height="40px"
        src={`/${type}.png`}
        alt="type"
      />
    </div>
  );
}
