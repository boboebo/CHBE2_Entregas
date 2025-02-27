export const isAdmin = (req, res, next) => {
  console.log(req.user);

  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized: No user found" });
  }
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Forbidden: Access denied" });
  }
  next();
};

export const isUser = (req, res, next) => {
  if (req.user.role !== "user") {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
};
