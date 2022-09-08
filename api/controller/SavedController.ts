/* eslint-disable object-curly-newline */
/* eslint-disable no-underscore-dangle */
import type { NextApiRequest, NextApiResponse } from 'next';
import ISavedService from '../interfaces/ISavedService';
import * as i from '../interfaces/IPokemon';

export default class SavedController {
  private _service: ISavedService;

  constructor(public service: ISavedService) {
    this._service = service;
  }

  async getAll(res: NextApiResponse) {
    try {
      const pokemons = await this._service.getAll();
      res.status(200).json(pokemons);
    } catch (e: any) {
      res.json({ messange: e.messange });
    }
  }

  async create(
    res: NextApiResponse,
    name: string,
    pokemonId: number,
    image: string,
    contactList: i.IContact[],
    types: i.IType[],
  ) {
    try {
      await this._service.create(name, pokemonId, image, contactList, types);
      res.status(201).end();
    } catch (e: any) {
      res.json({ messange: e.messange });
    }
  }

  async start(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    if (method === 'GET') {
      await this.getAll(res);
    }

    if (method === 'POST') {
      const { name, pokemonId, image, contactList, types } = req.body;
      await this.create(res, name, pokemonId, image, contactList, types);
    }
  }
}
