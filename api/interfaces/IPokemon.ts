export interface IContact {
  name: string,
  link: string,
}

export interface IType {
  name: string,
}

export interface IPokemon {
  name: string,
  timestamp: Date,
  contactList: IContact[],
  types: IType[],
}

export interface IPokemonWithId extends IPokemon {
  _id: string
}
