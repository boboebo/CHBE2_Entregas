import { config } from "dotenv";

config();

export default {
  jwtAuthKey: process.env.jwtAuthKey,
  MONGODB_URI: process.env.MONGODB_URI,
  APP_PORT: process.env.APP_PORT,
};
