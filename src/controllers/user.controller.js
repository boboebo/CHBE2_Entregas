import UserService from "../services/user.service.js";
import UserDTO from "../dto/user.dto.js";

const userService = new UserService();

export const register = async (req, res) => {
  try {
    const user = await userService.register(req.body);
    res.status(201).json({ message: "User created", user: new UserDTO(user) });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const token = await userService.login(req.body.email, req.body.password);
    res
      .cookie("jwtAuthToken", token, { maxAge: 60 * 60 * 1000, httpOnly: true })
      .json({ message: "Successful login", auth: token });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

export const getCurrentUser = (req, res) => {
  if (!req.user) return res.status(401).json({ message: "User not found" });
  res.json(new UserDTO(req.user));
};
