export interface IContact {
  name: string,
  link: string,
}

export interface IPokemon {
  name: string,
  pokemonId: number,
  image: string,
  timestamp: Date,
  contactList: IContact[] | [],
  types: string[],
}
