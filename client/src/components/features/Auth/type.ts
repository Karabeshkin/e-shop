export type Registration = {
  name: string;
  phone: string;
  password: string;
  cpassword: string;
};

export type User = {
  id: number;
  name: string;
  phone: string;
  password: string;
  isAdmin: boolean;
};

export type Authorization = {
  phone: string;
  password: string;
};

export type State = {
  user: User | {};
  error: string | undefined;
};

export type AuthState = {
  user: User | null;
  error: string | undefined;
};

export type Message = {
  message: string;
};
