/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
import Image from 'next/image';
import { useState } from 'react';
import { GrAddCircle } from 'react-icons/gr';
import IPokemon from '../../util/IPoKemon';
import ContactList from '../ContactList/ContactList';
import InputNewContact from '../InputNewContact/InputNewContact';
import InputNewName from '../InputNewName/InputNewName';
import PokemonTypes from '../PokemonType/PokemonType';
import styles from './Pokemon.module.css';

type IProps = {
  pokemon: IPokemon,
  getPokemonData(): Promise<void>,
  contact: string,
  setContact: (cont: string) => void
  name: string,
  setName: (nam: string) => void,
  typyingNewName: boolean,
  setTypyingNewName: (typ: boolean) => void,
  changeName(): void
  typing: boolean,
  setTypying: (typ: any) => void,
  addContact(): void
  savePokemon(): void
}

export default function Pokemon({
  pokemon,
  getPokemonData,
  contact,
  setContact,
  name,
  setName,
  typyingNewName,
  setTypyingNewName,
  changeName,
  typing,
  setTypying,
  addContact,
  savePokemon,
}: IProps) {
  return (
    <main
      className={styles.container}
      data-cy="pokemon"
    >
      <div
        data-cy="otherPokemon-btn"
        className={styles.button__otherPokemon}
        onClick={getPokemonData}
      >
        Escolher outro pokemon
      </div>
      {Object.values(pokemon).length !== 0 && (
        <div className={styles.container__pokemon}>
          <div className={styles.container__pokemon__image}>
            <div
              className={styles.pokemon__image}
            >
              <Image
                width="200px"
                height="200px"
                src={pokemon.image}
                alt="pokemon "
              />
              <div className={styles.container__types}>
                {pokemon.types.map((type: string, index: number) => (
                  <PokemonTypes key={index} type={type} />))}
              </div>
            </div>
          </div>
          {typyingNewName ? (
            <InputNewName
              name={name}
              setName={setName}
              changeName={changeName}
            />
          ) : (
            <div
              data-cy="pokemon-name"
              onClick={() => setTypyingNewName(true)}
              className={styles.title__pokemonName}
            >
              {pokemon.name}
            </div>
          )}
          <div className={styles.division__contactList} />
          <div className={styles.container__listTitle}>
            <h1 className={styles.title__contactList}>
              Lista de contatos
            </h1>
            <GrAddCircle
              data-cy="newContact-btn"
              onClick={() => setTypying((prev: any) => !prev)}
              className={styles.button__addContact}
            />
          </div>
          {typing && (
            <InputNewContact
              contact={contact}
              setContact={setContact}
              addContact={addContact}
            />
          )}
          {pokemon.contactList.map((cont: string, i: number) => (
            <ContactList key={i} contact={cont} i={i} />))}
        </div>
      )}
      <div
        data-cy="btn-add-pokemon"
        className={styles.button__otherPokemon}
        onClick={savePokemon}
      >
        Adicione o pokemon
      </div>
    </main>
  );
}
