import authHandlers from './handlers/auth';
import productHandlers from './handlers/product';
import userHandler from './handlers/user';

const handlers = [...productHandlers, ...userHandler, ...authHandlers];

export default handlers;
