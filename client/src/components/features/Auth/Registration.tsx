import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { registrationUser } from './authSlice';

export default function Registration():JSX.Element {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useAppDispatch();

  const { error } = useSelector((store:RootState) => store.auth);
  const { user } = useSelector((store:RootState) => store.auth);

  const registr = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(registrationUser({}))
  };

  return (
    <div>
      <form onSubmit={registr}>

            <input name="name" placeholder="name" required onChange={(e) => setName(e.target.value)} />
            <input type="password" name="password" placeholder="password" required onChange={(e) => setPassword(e.target.value)} />
            <input type="email" name="email" placeholder="email" required onChange={(e) => setEmail(e.target.value)} />
            <button type="submit">register</button>
      </form>

    </div>
  );
}
