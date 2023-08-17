import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <div>
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
