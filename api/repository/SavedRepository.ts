import connectToDatabase from '../connection';
import IPokemon from '../interfaces/IPokemon';
import ISavedRepository from '../interfaces/ISavedRepository';

export default class SavedRepository implements ISavedRepository {
  constructor(private connection = connectToDatabase) {
    this.connection = connection;
  }

  async getCollection(): Promise<any> {
    const db = await this.connection();
    return db.collection('saved');
  }

  async getAll(): Promise<IPokemon[]> {
    const saved = await this.getCollection();
    const pokemons = await saved.find().toArray();
    const finalList = pokemons.map((pokemon: IPokemon) => ({
      name: pokemon.name,
      pokemonId: pokemon.pokemonId,
      image: pokemon.image,
      timestamp: pokemon.timestamp,
      contactList: pokemon.contactList,
      types: pokemon.types,
    }));
    return finalList;
  }

  async create(
    name: string,
    pokemonId: number,
    image: string,
    timestamp: Date,
    contactList: string[],
    types: string[],
  ): Promise<void> {
    const saved = await this.getCollection();
    await saved.insertOne({
      name, pokemonId, image, timestamp, contactList, types,
    });
  }
}
