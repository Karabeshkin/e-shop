/* eslint-disable import/prefer-default-export */
import { User } from '../Auth/type';

export const loadUsersFetch = async (): Promise<User[]> => {
  const res = await fetch('/api/users');
  return res.json();
};
