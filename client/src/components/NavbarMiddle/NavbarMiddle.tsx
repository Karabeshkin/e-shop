import React, { memo, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../features/store/store';
import { logOut } from '../features/Auth/authSlice';
import './NavbarMiddle.css';
import config from '../../config.json';

function NavbarMiddle(): JSX.Element {
  const user = useSelector((store: RootState) => store.auth.user);
  const cartItems = useSelector(
    (store: RootState) => store.orderItems.orderItems
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOutFetch = async (): Promise<void> => {
    const res = await dispatch(logOut());
    if (res.meta.requestStatus === 'fulfilled') {
      navigate('/');
    }
  };

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    if (cartItems.length > 0) {
      setCartCount(cartItems.reduce((acc, el) => acc + el.count, 0));
    } else {
      setCartCount(0);
    }
  }, [cartItems]);

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
                <Link to="/registration">Зарегистрироваться</Link>
              </div>
              <div>
                <Link to="/authorization">Войти</Link>
              </div>
            </>
          )}
          {user && !user.isAdmin && (
            <>
              <div>
                <Link to="/cart">Корзина: {cartCount}</Link>
              </div>
              {config.favourites && (
                <div>
                  <Link to="/favorites">Избранное</Link>
                </div>
              )}
              <div>
                <Link to="/" className="" onClick={logOutFetch}>
                  Выйти
                </Link>
              </div>
            </>
          )}
          {user && user.isAdmin && (
            <>
              <div>
                <Link to="/admin">Админка</Link>
              </div>
              <div>
                <Link to="/admin/orders">Заказы</Link>
              </div>
              <div>
                <Link to="/" className="" onClick={logOutFetch}>
                  Выйти
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default memo(NavbarMiddle);
