import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as api from './api';
import { RootState } from '../../store/store';

export default function Registration():JSX.Element {
  const [login, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const { error } = useSelector((store:RootState) => store.auth);
  const { user } = useSelector((store:RootState) => store.auth);
  console.log(user);


  const registr = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    api.registrationFetch({ login, password, email, score: 0 })
   .then((data) => {
    console.log(data);

    dispatch({ type: 'auth/registration', payload: data });
});
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
