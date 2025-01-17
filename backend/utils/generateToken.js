import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  // Set JWT as HTTP-Only Cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "developement",
    sameSite: "strict",
    maxAge: 24 * 60 * 60 * 1000, // 1 Day
  });
};

export default generateToken;
