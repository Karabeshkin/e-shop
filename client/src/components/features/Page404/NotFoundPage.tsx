import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage(): JSX.Element {
  return (
    <div className="PageNotFoundContainer">
      <h1>Такой Страницы не существует</h1>
      <div>
        <img src="/notFound.png" alt="notFound" />
      </div>
      <div>
        <Link to="/">На Главную</Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
