import { Router } from 'express';
// Controllers
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ClientController from './app/controllers/ClientController';
import OrderserviceController from './app/controllers/OrderserviceController';
// Middleware Authorization
import authMiddleware from './app/middlewares/auth';
//
const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.use(authMiddleware);
routes.put('/users', UserController.update);
// routes actions client
routes.post('/clients', ClientController.store);
// routes actions order service
routes.post('/orderservices', OrderserviceController.create);
routes.get('/orderservices', OrderserviceController.list);

export default routes;
