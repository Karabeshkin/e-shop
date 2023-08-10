import { Authorization, Registration, User } from './type';

export const registrationFetch = async (obj:Registration):Promise<User> => {
const res = await fetch('/api/auth/reg', {
    method: 'post',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(obj)
});
  const data = await res.json();
  return data;
};

export const authorizationFetch = async (obj:Authorization):Promise<User> => {
  const res = await fetch('/api/auth/login', {
    method: 'post',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(obj)
  });
  const data = await res.json();
  return data;
}

export const verificationFetch = async ():Promise<User> => {
    const res = await fetch('/api/auth/verification');
    const data = await res.json();
    return data;
};