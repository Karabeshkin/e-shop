import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { authorizationUser } from './authSlice';
import './Authorization.css';
import NavbarMiddle from '../../NavbarMiddle/NavbarMiddle';

export default function Authorization(): JSX.Element {
  const error = useSelector((store: RootState) => store.auth.error);
  const user = useSelector((store: RootState) => store.auth.user);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const authorization = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    dispatch(authorizationUser({ phone, password }));
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  return (
    <div className="loginMane">
      <div className="login">
        <NavbarMiddle />
        <form onSubmit={authorization}>
          <input
            name="phone"
            placeholder="phone"
            required
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            name="password"
            placeholder="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="regButDiv">
            <button className="regBut" type="submit">
              Войти
            </button>
          </div>
        </form>
      </div>
      <div>{error}</div>
    </div>
  );
}
