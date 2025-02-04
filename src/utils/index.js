import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from "dotenv";
dotenv.config();

const secret = process.env.jwtAuthKey;
export const createToken = (user) => {
    return jwt.sign(user, secret, { expiresIn: '12h' })
}

export const hashPassword = (password) => {
    return bcrypt.hashSync(password, genSaltSync(10));
};

export const comparePassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
};
