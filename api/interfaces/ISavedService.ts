/* eslint-disable no-unused-vars */
/* eslint-disable semi */
import IPokemon from './IPokemon';

export default interface ISavedService {
  getAll(): Promise<IPokemon[]>;
  create(
    name: string,
    pokemonId: number,
    image: string,
    contactList: string[] | [],
    types: string[],
  ): Promise<void>;
}
