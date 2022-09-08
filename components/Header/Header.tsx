/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header({ pathname }: any) {
  function settingLinkStyle(page: string): string {
    if (pathname.includes('list')) {
      return page === 'list' ? styles.link__on : styles.link__off;
    }
    if (!pathname.includes('list')) {
      return page === 'home' ? styles.link__on : styles.link__off;
    }
    return styles.link__off;
  }

  return (
    <header className={styles.container}>
      <Head>
        <title>Pokemon monocard</title>
        <link rel="icon" href="/pokebola-icon.png" />
      </Head>
      <Image
        data-cy="pokemon-logo"
        width={500}
        height={280}
        src="/pokemon.png"
        alt="pokemon logo"
      />
      <div className={styles.container__logo__monocard}>
        <Image
          data-cy="monocard-logo"
          width={250}
          height={40}
          src="/monocard.png"
          alt="monocard logo"
        />
      </div>
      <div className={styles.container__links}>
        <Link data-cy="pokebola-link" href="/">
          <div className={`${styles.container__link} ${settingLinkStyle('home')}`}>
            <a>pokebola</a>
          </div>
        </Link>
        <Link data-cy="list-link" href="/list">
          <div className={`${styles.container__link} ${settingLinkStyle('list')}`}>
            <a>lista</a>
          </div>
        </Link>
      </div>
    </header>
  );
}
