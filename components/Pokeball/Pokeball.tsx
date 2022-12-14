/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
import Image from 'next/image';
import styles from './Pokeball.module.css';

export default function Pokeball({ generatePokemon }: { generatePokemon(): Promise<void> }) {
  return (
    <main className={styles.container}>
      <div className={styles.container}>
        <div
          className={styles.pokeball}
          data-cy="pokeball"
          onClick={generatePokemon}
        >
          <div className={styles.top} />
          <div className={styles.bottom} />
          <div className={styles.middle} />
        </div>
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
    </main>
  );
}
