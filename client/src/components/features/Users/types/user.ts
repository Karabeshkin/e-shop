export type User = {
  id: number;
  name: string;
  phone: string;
  isAdmin: boolean;
};

export type UserId = User['id'];

export type UserAuthReg = {
  name: string;
  phone: string;
  password: string;
  cpassword: string;
};

export type UserAuthLog = {
  phone: string;
  password: string;
};

export type UsersState = {
  users: User[];
  error: string | undefined;
};
