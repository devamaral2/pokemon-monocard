/* eslint-disable no-unused-vars */
/* eslint-disable semi */
import * as i from './IPokemon';

export default interface ISavedService {
  getAll(): Promise<i.IPokemon[]>;
  create(
    name: string,
    pokemonId: number,
    image: string,
    contactList: i.IContact[] | [],
    types: i.IType[],
  ): Promise<void>;
}
