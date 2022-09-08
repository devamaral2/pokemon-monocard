/* eslint-disable react/jsx-filename-extension */
import Image from 'next/image';
import styles from './CardType.module.css';

export default function CardType({ type, i, fi }: { type: string, i: number, fi: number }) {
  return (
    <div data-cy={`type-${fi}-${i}`} className={styles.container__type}>
      <Image
        width="20px"
        height="20px"
        src={`/${type}.png`}
        alt="type"
      />
    </div>
  );
}
