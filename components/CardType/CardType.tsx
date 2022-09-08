/* eslint-disable react/jsx-filename-extension */
import Image from 'next/image';
import styles from './CardType.module.css';

export default function CardType({ type, key }: { type: string, key: number }) {
  return (
    <div data-cy={`type${key}`} className={styles.container__type}>
      <Image
        width="20px"
        height="20px"
        src={`/${type}.png`}
        alt="type"
      />
    </div>
  );
}
