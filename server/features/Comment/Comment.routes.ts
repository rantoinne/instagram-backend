import * as express from 'express';
import CommentController from './Comment.controller';

export default function registerCommentRoutes(app: express.Application) {
  app
    .route('/api/v1/add-comment')
    .post(CommentController.addComment);
}
