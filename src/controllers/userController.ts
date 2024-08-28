import { Request, Response } from 'express';
import { findUserById } from '../services/userService';

export const getUser = async (req: Request, res: Response) => {
  const user = await findUserById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};
