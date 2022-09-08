/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import * as i from './IPokemon';

export default interface ISavedRepository {
  getCollection(): Promise<any>;
  getAll(): Promise<i.IPokemon[]>;
  create(
    name: string,
    pokemonId: number,
    image: string,
    timestamp: Date,
    contactList: i.IContact[] | [],
    types: i.IType[],
  ): Promise<void>;
}
