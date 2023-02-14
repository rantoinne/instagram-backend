import { Dialect, Sequelize } from 'sequelize';
import { UserFactory } from './models/User';
import { PostFactory } from './models/Post';
import { ChatFactory } from './models/Chat';
import processReady from './utils/onProcessReady';
import { CommentFactory } from './models/Comment';
import { PostLikeFactory } from './models/PostLike';
import { ConversationFactory } from './models/Conversation';

const database = process.env.MYSQL_DB;

/* eslint-disable no-console */
const config = {
  logging: process.env.DEBUG_DB === 'true' ? console.log : false,
  dialect: 'mysql' as Dialect,
  dialectOptions: { ssl: {
    require: true,
    rejectUnauthorized: false,
  } },
  host: '127.0.0.1',
};

if (!database) {
  // @ts-ignore
  config.dialectOptions.ssl = { require: true, rejectUnauthorized: false, };
}

let sequelize: Sequelize;

if (!database) {
  sequelize = new Sequelize(
    'instagram',
    'root',
    'root',
    config,
  );
} else {
  console.log({ config });
  
  sequelize = new Sequelize(database, config);
}


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to database succesfull');
    processReady();
  })
  .catch(err => console.log('Error connecting to database: ', err));
/* eslint-enable no-console */

const db = {
  sequelize,
  Sequelize,
  User: UserFactory(sequelize),
  Chat: ChatFactory(sequelize),
  Post: PostFactory(sequelize),
  Comment: CommentFactory(sequelize),
  PostLike: PostLikeFactory(sequelize),
  Conversation: ConversationFactory(sequelize),
};


Object.keys(db).forEach((modelName: string) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

export default db;
