import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(401)
      .json({ message: "No hay token, acceso no autorizado" });
  }

  try {
    const decoded = jwt.verify(token, "secretKey");

    req.userId = decoded.userId;

    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Token no válido" });
  }
};
