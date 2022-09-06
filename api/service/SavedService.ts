/* eslint-disable no-underscore-dangle */
import ISavedRepository from '../interfaces/ISavedRepository';
import * as i from '../interfaces/IPokemon';
import ISavedService from '../interfaces/ISavedService';

export default class SavedService implements ISavedService {
  private _repository: ISavedRepository;

  constructor(public repository: ISavedRepository) {
    this._repository = repository;
  }

  async getAll(): Promise<any> {
    const pokemons = await this._repository.getAll();
    return pokemons;
  }

  async create(
    name: string,
    pokemonId: number,
    contactList: i.IContact[],
    types: i.IType[],
  ): Promise<void> {
    await this._repository.create(name, pokemonId, new Date(), contactList, types);
  }
}
