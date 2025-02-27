import User from "../models/user.model.js";

class UserDAO {
  async getByEmail(email) {
    return await User.findOne({ email });
  }

  async create(userData) {
    return await User.create(userData);
  }

  async getById(id) {
    return await User.findById(id);
  }
}

export default UserDAO;
