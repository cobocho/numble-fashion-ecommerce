import productHandlers from './handlers/product';
import { userHandler } from './handlers/user';

const handlers = [...productHandlers, ...userHandler];

export default handlers;
