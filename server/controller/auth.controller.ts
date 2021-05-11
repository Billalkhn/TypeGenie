import { Request, Response, NextFunction } from "express";
import { loginUser } from "../services/auth/login.service";
import { insertUser } from "../services/auth/register.service";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await insertUser(req.body);
    res.status(200).json({ rsult: "Successfully registed" });
  } catch (err) {
    next(err);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    await loginUser(email, password);
    res.status(200).json({ result: "Successfully loggedin" });
  } catch (err) {
    next(err);
  }
};
