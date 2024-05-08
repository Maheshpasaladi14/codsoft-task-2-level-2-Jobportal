const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const token = await req.headers["auth-token"];
  if (!token) {
    return res.status(401).json({ message: "Token Authentication Failed" });
  }
  try {
    const decoded = jwt.verify(token, "jwtsecretkey");
    req.id = await decoded.id;
    next();
  } catch (error) {
    res.status(401).send({ error });
  }
};

module.exports = verifyToken