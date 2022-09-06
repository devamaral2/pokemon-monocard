import connectToDatabase from '../model/connection';
import * as i from '../interfaces';

export default class SavedRepository {
  constructor(private connection = connectToDatabase) {
    this.connection = connection;
  }

  async getCollection() {
    const db = await this.connection();
    return db.collection('saved');
  }

  async getAll() {
    const model = await this.getCollection();
    const pokemons = await model.find().toArray();
    const finalList = pokemons.map((pokemon: any) => ({
      name: pokemon.name,
      timestamp: pokemon.timestamp,
      contactList: pokemon.contactList,
      types: pokemon.types,
    }));
    return finalList;
  }

  async create(
    name: string,
    timestamp: Date,
    contactList: i.IContact[],
    types: i.IType[],
  ) {
    const model = await this.getCollection();
    await model.insertOne({
      name, timestamp, contactList, types,
    });
  }
}
