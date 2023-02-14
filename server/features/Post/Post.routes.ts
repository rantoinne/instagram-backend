import * as express from 'express';
import PostController from './Post.controller';

export default function registerPostRoutes(app: express.Application) {
  app
    .route('/api/v1/create-post')
    .post(PostController.createPost);
  app
    .route('/api/v1/get-posts')
    .post(PostController.getPosts);
  app
    .route('/api/v1/get-user-posts')
    .post(PostController.getUserPosts);
}
