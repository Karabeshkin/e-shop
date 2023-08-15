import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../features/store/store';
import { logOut } from '../features/Auth/authSlice';
import './NavbarMiddle.css';

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
    <nav className="navbar ">
      <div className="nav">
        <div id="navmobile" className="right hide-on-med-and-down">
          <div>
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
                <div>Корзина</div>
              </div>
              <div>
                <div className="" onClick={logOutFetch}>
                  LogOut
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavbarMiddle;
