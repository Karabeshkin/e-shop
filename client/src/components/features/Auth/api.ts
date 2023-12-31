import { Authorization, Registration, User } from './type';

export const registrationFetch = async (obj: Registration): Promise<User> => {
  const res = await fetch('/api/auth/registration', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();
  return data;
};

export const authorizationFetch = async (obj: Authorization): Promise<User> => {
  const res = await fetch('/api/auth/authorization', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();
  return data;
};

export const verificationFetch = async (): Promise<User> => {
  const res = await fetch('/api/auth/verification');
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();
  return data;
};

export const logOutFetch = async (): Promise<void> => {
  const res = await fetch('/api/auth/logout', { credentials: 'include' });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  return res.json();
};
