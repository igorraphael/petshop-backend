import { Router } from 'express';
// Controllers
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ClientController from './app/controllers/ClientController';
import OrderserviceController from './app/controllers/OrderserviceController';
import ExpenseController from './app/controllers/ExpenseController';
import CashflowController from './app/controllers/CashflowController';
import DogController from './app/controllers/DogController';
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
routes.get('/clients', ClientController.list);
// routes actions order service
routes.post('/orderservices', OrderserviceController.create);
routes.get('/orderservices', OrderserviceController.list);
routes.put('/orderservices', OrderserviceController.update);
routes.get('/orderservice/:id', OrderserviceController.index);
// routes actions expense
routes.post('/expenses', ExpenseController.create);
routes.get('/expenses', ExpenseController.list);
routes.put('/expenses', ExpenseController.update);
routes.delete('/expenses/:id', ExpenseController.delete);
// routes actions cash flow
routes.post('/cashflow', CashflowController.create);
// routes actions dog
routes.post('/dogs', DogController.create);

export default routes;
