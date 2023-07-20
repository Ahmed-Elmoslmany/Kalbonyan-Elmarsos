import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js';

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !password || !email) {
    throw new BadRequestError("please provide all value");
  }

  const userAlreadyExist = await User.findOne({ email: email });
  if (userAlreadyExist) {
    throw new BadRequestError("email is already taken");
  }
  const user = await User.create(req.body);
  const token = user.createJWT();
  res.status(201).json({
    user: {
      email: user.email,
      name: user.name,
      phone: user.phone,
      birth: user.birth,
    },
    token,
  });
};

 export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new UnAuthenticatedError("Unvalid credentiants");
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("Unvalid credentiants");
  }
  const token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token, phone: user.phone });
};

export const updateUser = async (req, res) => {
  const { email, name, phone, birth, password } = req.body;
  if (!email || !name || !phone || !birth || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const user = await User.findOne({ _id: req.user.userId });

  user.name = name;
  user.email = email;
  user.password = password;
  user.phone = phone;
  user.birth = birth;
  

  await user.save();

  const token = user.createJWT();

  res.status(StatusCodes.OK).json({ user, token });
};
