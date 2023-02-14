import { reqType, resType } from '../../utils/types';
import asyncWrapper from '../../utils/asyncWrapper';
import { addCommentToPost } from './Comment.services';
import { getAllPosts, getSpecificPost } from '../Post/Post.services';

export const addCommentController = async (req: reqType, res: resType) => {
  const {
    postId,
    userId,
    comment,
  } = req.body;
  await addCommentToPost(
    postId,
    userId,
    comment,
  );
  const post = await getSpecificPost(postId);
  res.send({
    post,
    isSuccess: true,
  }).end();
};

export default {
  addComment: asyncWrapper(addCommentController),
};
