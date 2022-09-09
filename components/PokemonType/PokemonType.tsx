/* eslint-disable react/jsx-filename-extension */
import Image from 'next/image';
import styles from './PokemonTypes.module.css';

export default function PokemonTypes({ type, length, i }:
  { type: string, length: number, i:number }) {
  const settingTypeClassName = () => {
    if (length === 2) {
      return i === 0 ? styles.container__type0 : styles.container__type1;
    }
    return styles.container__type;
  };

  return (
    <div className={settingTypeClassName()}>
      <Image
        width="60px"
        height="60px"
        src={`/${type}.png`}
        alt="type"
      />
    </div>
  );
}
