/* eslint-disable no-underscore-dangle */
import ISavedRepository from '../interfaces/ISavedRepository';
import IPokemon from '../interfaces/IPokemon';
import ISavedService from '../interfaces/ISavedService';

export default class SavedService implements ISavedService {
  private _repository: ISavedRepository;

  constructor(public repository: ISavedRepository) {
    this._repository = repository;
  }

  async getAll(): Promise<IPokemon[]> {
    const pokemons = await this._repository.getAll();
    return pokemons;
  }

  async create(
    name: string,
    pokemonId: number,
    image: string,
    contactList: string[] | [],
    types: string[],
  ): Promise<void> {
    await this._repository.create(name, pokemonId, image, new Date(), contactList, types);
  }
}
