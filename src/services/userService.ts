import { User } from '../models/userModel';

export const findUserById = async (id: string): Promise<User | null> => {
  // Mocked data for example
  const user: User | null = {
    id: id,
    name: 'John Doe',
    email: 'johndoe@example.com',
  };
  return user;
};