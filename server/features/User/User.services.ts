import * as bcrypt from 'bcrypt';
import models from '../../models';
import { GENERATION_ROUNDS } from '../../utils/contants';

const {
  User,
  Post,
} = models;

export const generatePassword = async (password: string) => {
  let hashedPassword;
  let salt: string;

  bcrypt
  .genSalt(GENERATION_ROUNDS)
  .then(salt => {
    salt = salt;
  })
  bcrypt.hash(password, salt)
  .then(hash => {
    hashedPassword = hash;
  })
  .catch(err => console.error(err.message))
};

export const validateUser = async (
  password: string,
  passwordToCompare: string,
) => {
  let isUserPasswordValid = false;
  bcrypt
  .hash(password, GENERATION_ROUNDS)
  .then(hash => {
    bcrypt
      .compare(passwordToCompare, hash)
      .then(res => {
        isUserPasswordValid = res;
      })
      .catch(err => console.error(err.message))
  })
  .catch(err => console.error(err.message))
  return isUserPasswordValid;
};

export const findUserByUserName = async (userName) => {
  const findUser = await User.findOne({
    where: { userName }
  });
  return findUser;
};

export const createUser = async (
  email: string,
  fullName: string,
  userName: string,
  password: string,
  userAvatar: string,
) => {
  const exisitingUser = await findUserByUserName(userName);
  if (exisitingUser) {
    throw new Error('User already exists!');
  }
  // const passwordHash = await generatePassword(password);
  const passwordHash = password;
  const newUser = await User.create({
    email,
    fullName,
    userName,
    userAvatar: userAvatar || 'https://png.pngitem.com/pimgs/s/226-2267516_male-shadow-circle-default-profile-image-round-hd.png',
    passwordHash,
  });

  if (newUser.id) return newUser;
  throw new Error(`Error occurred while creating the user ${userName}`);
};

export const loginUser = async (
  rawPassword: string,
  userName: string,
) => {
  let isSuccess = false;
  let userId = null;
  const user = await findUserByUserName(userName);
  if (!user) {
    throw new Error('Username invalid!');
  }
  const { passwordHash, id } = user;
  // const isPasswordVerified = await validateUser(rawPassword, passwordHash);
  const isPasswordVerified = rawPassword === passwordHash;
  if (isPasswordVerified) {
    isSuccess = true;
    userId = id;
  }
  return { isSuccess, userId };
};

export const getUserInfo = async (
  userId: number,
) => {
  const userInfo = await User.findOne({
    where: { id: userId },
    include: [{
      model: Post,
      as: 'posts',
    }],
  });
  return userInfo;
};

export const getIfUserNameIsAvailable = async (
  userName: string, 
) => {
  const exisitingUserCount = await User.count({
    where: { userName },
  });

  return exisitingUserCount > 0;
};
