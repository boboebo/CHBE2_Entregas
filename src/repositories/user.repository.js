import UserDAO from "../dao/user.dao.js";

class UserRepository {
  constructor() {
    this.userDAO = new UserDAO();
  }

  async getByEmail(email) {
    return await this.userDAO.getByEmail(email);
  }

  async create(userData) {
    return await this.userDAO.create(userData);
  }

  async getById(id) {
    return await this.userDAO.getById(id);
  }
}

export default UserRepository;
