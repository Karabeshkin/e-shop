import React, { useState } from 'react';
import * as api from './api';
import { useAppDispatch } from '../store/store';


export default function Authorization(): JSX.Element {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();

  const authorization = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    api
      .authorizationFetch({ phone, password })
      .then((data) => dispatch({ type: 'auth/authorization', payload: data }));
  };

  return (
    <div>
      <form onSubmit={authorization}>
        <input name="phone" placeholder="phone" required onChange={(e) => setPhone(e.target.value)} />
        <input name="password" placeholder="password" required onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
