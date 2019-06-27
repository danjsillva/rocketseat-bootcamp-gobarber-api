import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

import AuthMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.post('/users', UserController.store);
routes.put('/users/:id', AuthMiddleware, UserController.update);

export default routes;
