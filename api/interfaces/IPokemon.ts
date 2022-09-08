/* eslint-disable semi */
export default interface IPokemon {
  name: string,
  pokemonId: number,
  image: string,
  timestamp: Date,
  contactList: string[] | [],
  types: string[],
}
