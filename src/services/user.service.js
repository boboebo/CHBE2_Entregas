import UserRepository from "../repositories/user.repository.js";
import { hashPassword, comparePassword, createToken } from "../utils/index.js";

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async register(userData) {
    const userExists = await this.userRepository.getByEmail(userData.email);
    if (userExists) throw new Error("User already exists");

    userData.password = hashPassword(userData.password);
    return await this.userRepository.create(userData);
  }

  async login(email, password) {
    const user = await this.userRepository.getByEmail(email);
    if (!user || !comparePassword(password, user.password)) {
      throw new Error("Invalid credentials");
    }
    return createToken({ id: user._id, email: user.email, role: user.role });
  }
}

export default UserService;
