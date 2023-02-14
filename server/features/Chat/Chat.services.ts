import models from '../../models';

const {
  Chat,
  Conversation,
} = models;

export const addChatMessage = async (
  message: string,
  conversationId?: number,
  userOneId?: number,
  userTwoId?: number,
) => {
  try {
    let conversationExists = await Conversation.findByPk(conversationId);
    if (!conversationExists) {
      conversationExists = await Conversation.create({
        userOne: userOneId,
        userTwo: userTwoId,
      });
    }
    await Chat.create({
      message,
      conversationId: conversationExists.id,
    });
  } catch(e) {
    throw new Error(e);
  }
};

export const getChatsFromConversation = async (
  conversationId: number,
) => {
  const chats = await Chat.findAll({
    where: {
      conversationId,
    },
  });
  return chats;
};
