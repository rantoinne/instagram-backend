import * as express from 'express';
import PostLikeController from './PostLike.controller';

export default function registerPostLikeRoutes(app: express.Application) {
  app
    .route('/api/v1/like-post')
    .post(PostLikeController.likePost);
}
