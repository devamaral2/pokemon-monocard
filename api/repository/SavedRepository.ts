import connectToDatabase from '../model/connection';

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
}
