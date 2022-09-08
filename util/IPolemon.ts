export interface IContact {
  name: string,
  link: string,
}

export interface IPokemon {
  name: string,
  pokemonId: number,
  image: string,
  contactList: IContact[] | [],
  types: string[],
}
