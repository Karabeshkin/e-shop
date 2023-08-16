import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { registrationUser } from './authSlice';
import './Registration.css';
import NavbarMiddle from '../../NavbarMiddle/NavbarMiddle';

export default function Registration(): JSX.Element {
  const [name, setName] = useState('');
  const [phone, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();




 

  const error = useSelector((store: RootState) => store.auth.error);
  // const user = useSelector((store:RootState) => store.auth.user);


  const registr = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    dispatch(registrationUser({ name, phone, password, cpassword }));

    try {
      const res = await dispatch(
        registrationUser({ name, phone, password, cpassword })
      );
      if (res.payload !== undefined) {
        navigate('/');
      }
    } catch (errorr) {
      console.log(errorr);
    }

  };

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user])



  return (
    <div className="registrMane">
      <div className="registr">
        <NavbarMiddle />
        <form onSubmit={registr}>
          <input
            name="name"
            placeholder="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            name="phone"
            placeholder="phone"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            name="cpassword"
            placeholder="cpassword"
            required
            onChange={(e) => setCpassword(e.target.value)}
          />
          <button type="submit">register</button>
        </form>
      </div>
      <div>{error}</div>
    </div>
  );
}
