/* eslint-disable react/jsx-filename-extension */
import Head from 'next/head';

export default function Header() {
  return (
    <div>
      <Head>
        <title>Pokemon monocard</title>
        <link rel="icon" href="/pokebola-icon.png" />
      </Head>
      <img src="pokemon.png" alt="Vercel Logo" />
      <div>
        <button
          type="button"
        >
          pokebola
        </button>
        <button
          type="button"
        >
          link
        </button>
      </div>
    </div>
  );
}
