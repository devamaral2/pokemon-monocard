/* eslint-disable react/jsx-filename-extension */
import Image from 'next/image';
import styles from './Pokeball.module.css';

export default function Pokeball() {
  return (
    <div className="container">
      <div className={styles.shadow} />
      <div className={styles.pokeball}>
        <div className={styles.top} />
        <div className={styles.bottom} />
        <div className={styles.middle} />
      </div>
      <div className={styles.span__messange}>
        <Image
          data-cy="pokemon-logo"
          width={400}
          height={70}
          src="/spanMessange.png"
          alt="pokemon logo"
        />
      </div>
    </div>
  );
}
