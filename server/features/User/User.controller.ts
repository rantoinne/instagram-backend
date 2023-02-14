import { reqType, resType } from '../../utils/types';
import asyncWrapper from '../../utils/asyncWrapper';
import {
  createUser, getUserInfo, loginUser, getIfUserNameIsAvailable,
} from './User.services';

export const createUserForSignUp = async (req: reqType, res: resType) => {
  const {
    email,
    fullName,
    userName,
    password,
    userAvatar,
  } = req.body;
  const newUser = await createUser(
    email,
    fullName,
    userName,
    password,
    userAvatar,
  );
  res.send({
    isSuccess: true,
    userId: newUser.id,
  }).end();
};

export const loginUserController = async (req: reqType, res: resType) => {
  const {
    userName,
    password,
  } = req.body;
  const response = await loginUser(
    password,
    userName,
  );
  res.send(response).end();
};

export const userInfo = async (req: reqType, res: resType) => {
  const {
    userId,
  } = req.body;
  const userInfo = await getUserInfo(userId);
  res.send({
    userInfo,
    isSuccess: true,
  }).end();
};

export const userNameAvailability = async (req: reqType, res: resType) => {
  const {
    userName,
  } = req.body;
  const userNameAvailable = await getIfUserNameIsAvailable(userName);

  res.send({ isSuccess: userNameAvailable }).end();
};

export default {
  signUp: asyncWrapper(createUserForSignUp),
  loginUser: asyncWrapper(loginUserController),
  userInfo: asyncWrapper(userInfo),
  userNameAvailability: asyncWrapper(userNameAvailability),
};
