import models from '../../models';
import { getAllPosts, getSpecificPost } from '../Post/Post.services';

const {
  PostLike,
} = models;

export const addLikeToPost = async (
  postId: number,
  userId: number,
) => {
  let post = null;
  try {
    const existingLike = await PostLike.findOne({ where: { postId, userId } });

    if (existingLike) {
      await PostLike.destroy({ where: { id: existingLike.id } });
    } else {
      await PostLike.create({ postId, userId });
    }
    post = await getSpecificPost(postId);
  } catch (e) {
    throw new Error(e);
  }
  return post;
};

export const getLikesCountOnPost = async (
  postId: number,
) => {
  const likesCount = await PostLike.count({
    where: { postId },
  });
  return likesCount;
};

export const getLikedUserOnPost = async () => {
  // 
}
