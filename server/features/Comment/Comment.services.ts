import models from '../../models';

const {
  Comment,
} = models;

export const addCommentToPost = async (
  postId: number,
  userId: number,
  comment: string,
) => {
  await Comment.create({
    postId,
    userId,
    comment,
  });
};

export const getAllCommentsForAPost = async (
  postId: number,
) => {
  const comments = await Comment.findAll({
    where: { postId },
  });
  return comments;
};
