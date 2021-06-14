import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const lb = dotenv.config();
const jwtSecret = process.env.JWT_SECRET;

const checkToken = (req, res, next) => {
  // Get token from header
  const token = req.header('x-auth-token');

  // check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token not valid' });
  }
};

export default checkToken;
