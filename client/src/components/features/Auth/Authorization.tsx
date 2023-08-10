import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as api from './api';
import { RootState } from '../../store/store';

export default function Authorization(): JSX.Element {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const authorization = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    api
      .authorizationFetch({ login, password })
      .then((data) => dispatch({ type: 'auth/authorization', payload: data }));
  };

  return (
    <div>
      <form onSubmit={authorization}>
        <input
          name="login"
          placeholder="login"
          required
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          name="password"
          placeholder="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">register</button>
      </form>
    </div>
  );
}
