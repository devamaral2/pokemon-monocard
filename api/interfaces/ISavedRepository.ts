/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import IPokemon from './IPokemon';

export default interface ISavedRepository {
  getCollection(): Promise<any>;
  getAll(): Promise<IPokemon[]>;
  create(
    name: string,
    pokemonId: number,
    image: string,
    timestamp: Date,
    contactList: string[] | [],
    types: string[],
  ): Promise<void>;
}
