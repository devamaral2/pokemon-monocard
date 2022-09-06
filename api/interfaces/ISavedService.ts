/* eslint-disable no-unused-vars */
/* eslint-disable semi */
import * as i from './IPokemon';

export default interface ISavedService {
  getAll(): Promise<any>;
  create(
    name: string,
    pokemonId: number,
    contactList: i.IContact[],
    types: i.IType[],
  ): Promise<void>;
}
