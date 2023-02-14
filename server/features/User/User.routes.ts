import * as express from 'express';
import UserController from './User.controller';

export default function registerUserRoutes(app: express.Application) {
  app
    .route('/api/v1/sign-up')
    .post(UserController.signUp);
  app
    .route('/api/v1/user-login')
    .post(UserController.loginUser);
  app
    .route('/api/v1/user-info')
    .post(UserController.userInfo);
  app
    .route('/api/v1/user-name-availility')
    .post(UserController.userNameAvailability);
}
