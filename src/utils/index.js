import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import config from "../config/config.js";

const secret = config.jwtAuthKey;
export const createToken = (user) => {
  return jwt.sign(user, secret, { expiresIn: "12h" });
};

export const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

export const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};
