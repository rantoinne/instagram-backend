import { reqType, resType } from '../../utils/types';
import asyncWrapper from '../../utils/asyncWrapper';
import { addLikeToPost } from './PostLike.services';

export const likePost = async (req: reqType, res: resType) => {
  const {
    postId,
    userId,
  } = req.body;

  const post = await addLikeToPost(postId, userId);
  res.send({
    post,
    isSuccess: true,
  }).end();
};

export default {
  likePost: asyncWrapper(likePost),
};
