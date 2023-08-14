import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { registrationUser } from './authSlice';

export default function Registration():JSX.Element {
  const [name, setName] = useState('');
  const [phone, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { error } = useSelector((store:RootState) => store.auth);
  const { user } = useSelector((store:RootState) => store.auth);

  const registr = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      await dispatch(registrationUser({ name, phone, password, cpassword }));
      if (user) {
        navigate('/');
      }
    } catch (errorr) {
      console.log(errorr);
    }
  };

  return (
    <div>
      <form onSubmit={registr}>
            <input name="name" placeholder="name" required onChange={(e) => setName(e.target.value)} />
            <input type="phone" name="phone" placeholder="phone" required onChange={(e) => setEmail(e.target.value)} />
            <input type="password" name="password" placeholder="password" required onChange={(e) => setPassword(e.target.value)} />
            <input type="cpassword" name="cpassword" placeholder="cpassword" required onChange={(e) => setCpassword(e.target.value)} />
            <button type="submit">register</button>
      </form>
      <div>{error}</div>
    </div>
  );
}
