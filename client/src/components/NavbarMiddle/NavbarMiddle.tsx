import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../features/store/store';
import { logOut } from '../features/Auth/authSlice';
import './NavbarMiddle.css';
import config from '../../config.json';

function NavbarMiddle(): JSX.Element {
  const user = useSelector((store: RootState) => store.auth.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOutFetch = async (): Promise<void> => {
    const res = await dispatch(logOut());
    if (res.meta.requestStatus === 'fulfilled') {
      navigate('/');
    }
  };

  return (
    <nav className="navbar orange lighten-4">
      <div className="nav">
        <div id="navmobile" className="right hide-on-med-and-down">
          <div className="link">
            <Link to="/">Главная</Link>
          </div>
          {!user && (
            <>
              <div>
                <Link to="/registration">Registration</Link>
              </div>
              <div>
                <Link to="/authorization">LogIn</Link>
              </div>
              
            </>
          )}
          {user && (
            <>
              <div>
                <Link to="/cart">Корзина</Link>
              </div>
              {config.favourites && (
                <div>
                  <Link to="/favorites">Избранное</Link>
                </div>
              )}
              <div>
                <Link to="/" className="" onClick={logOutFetch}>
                  LogOut
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavbarMiddle;
