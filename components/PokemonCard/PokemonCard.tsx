/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import Image from 'next/image';
import IPokemon from '../../util/IPoKemon';
import CardContact from '../CardContact/CardContact';
import CardType from '../CardType/CardType';

export default function PokemonCard({ pokemon }: { pokemon: IPokemon }) {
  return (
    <div>
      <span>{pokemon.name}</span>
      <Image
        width="100px"
        height="100px"
        src={pokemon.image}
        alt="pokemon "
      />
      {pokemon.types.length !== 0
        && pokemon.types.map((type: string, i: number) => <CardType key={i} type={type} />)}
      {pokemon.contactList.length !== 0
        && pokemon.contactList
          .map((contact: string, i: number) => <CardContact key={i} contact={contact} />)}
    </div>
  );
}
