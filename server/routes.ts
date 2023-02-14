import * as path from 'path';
import * as express from 'express';
import db from './models';

import registerPostRoutes from './features/Post/Post.routes'
import registerUserRoutes from './features/User/User.routes';
import registerPostLikeRoutes from './features/PostLike/PostLike.routes';
import registerCommentRoutes from './features/Comment/Comment.routes';

export default function routes(app: express.Application) {
  app.get('/health', async (_req, res) => {
    try {
      await db.sequelize.query('SELECT 1 + 1 AS result');
      res.send('Pong');
    } catch (e) {
      res.send(`Error: ${e}`);
    }
  });
  registerPostRoutes(app);
  registerUserRoutes(app);
  registerCommentRoutes(app);
  registerPostLikeRoutes(app);
}
