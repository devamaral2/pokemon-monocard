import SavedRepository from '../repository/SavedRepository';
import SavedService from '../service/SavedService';
import SavedController from '../controller/SavedController';

const repository = new SavedRepository();
const service = new SavedService(repository);
const controller = new SavedController(service);

export default controller;
