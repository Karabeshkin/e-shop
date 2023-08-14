import { User } from '../../Users/types/user';

export type AuthState = {
  user: User | undefined;
  error: string | undefined;
};
