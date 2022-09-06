/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import * as i from './IPokemon';

export default interface ISavedRepository {
  getCollection(): Promise<any>;
  getAll(): Promise<any>;
  create(
    name: string,
    pokemonId: number,
    timestamp: Date,
    contactList: i.IContact[],
    types: i.IType[],
  ): Promise<void>;
}
