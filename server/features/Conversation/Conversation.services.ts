import { Op } from 'sequelize';
import models from '../../models';

const {
  Chat,
  Conversation,
} = models;

export const getConversationsOfUser = async (userId) => {
  const conversations = await Conversation.findAll({
    where: {
      [Op.or]: [
        { userOne: userId },
        { userTwo: userId },
      ],
    },
    include: [{
      model: Chat,
      as: 'chats',
      limit: 1,
      order: [['createdAt', 'DESC']],
      attributes: ['message'],
    }],
  });

  return conversations;
};
