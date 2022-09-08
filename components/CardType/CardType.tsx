/* eslint-disable react/jsx-filename-extension */
import Image from 'next/image';
import styles from './CardType.module.css';

export default function CardType({ type, i }: { type: string, i: number }) {
  return (
    <div data-cy={`type-${i}`} className={styles.container__type}>
      <Image
        width="20px"
        height="20px"
        src={`/${type}.png`}
        alt="type"
      />
    </div>
  );
}
