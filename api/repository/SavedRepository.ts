import connectToDatabase from '../connection';
import * as i from '../interfaces/IPokemon';
import ISavedRepository from '../interfaces/ISavedRepository';

export default class SavedRepository implements ISavedRepository {
  constructor(private connection = connectToDatabase) {
    this.connection = connection;
  }

  async getCollection(): Promise<any> {
    const db = await this.connection();
    return db.collection('saved');
  }

  // Tentei utilizar o mongoose para criar models para as funções
  // mas não consegui realizar a conecção com o mongoDb atlas.
  async getAll(): Promise<any> {
    const saved = await this.getCollection();
    const pokemons = await saved.find().toArray();
    const finalList = pokemons.map((pokemon: any) => ({
      name: pokemon.name,
      pokemonId: pokemon.pokemonId,
      timestamp: pokemon.timestamp,
      contactList: pokemon.contactList,
      types: pokemon.types,
    }));
    return finalList;
  }

  async create(
    name: string,
    pokemonId: number,
    timestamp: Date,
    contactList: i.IContact[],
    types: i.IType[],
  ): Promise<void> {
    const saved = await this.getCollection();
    await saved.insertOne({
      name, pokemonId, timestamp, contactList, types,
    });
  }
}
