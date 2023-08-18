import React from 'react';
import './Section.css';
import { Link } from 'react-router-dom';

function Section(): JSX.Element {
  return (
    <div className="Section">
      <div className="DivspanSection">
        <img src="/raznoe.png" alt="напитки " />
        <Link to="/categories/Чай" className="spanSection">
          {' '}
          Чай{' '}
        </Link>
      </div>
      <div className="DivspanSection">
        <img src="/chips.png" alt="крупы" />
        <Link to="/categories/Крупы" className="spanSection">
          {' '}
          Крупы{' '}
        </Link>
      </div>
      <div className="DivspanSection">
        <img src="/pasta.png" alt="разное" />
        <Link to="/categories/Макароны" className="spanSection">
          {' '}
          Макароны{' '}
        </Link>
      </div>
      <div className="DivspanSection">
        <img src="/ovoshi.png" alt="овощи" />
        <Link to="/categories/Овощи" className="spanSection">
          {' '}
          Овощи
        </Link>
      </div>
      <div className="DivspanSection">
        <img src="/cardSection..png" alt="мясо" />
        <Link to="/categories/Мясо" className="spanSection">
          Мясо
        </Link>
      </div>
      <div className="DivspanSection">
        <img src="/gotovo.png" alt="напитки " />
        <Link to="/categories/Напитки" className="spanSection">
          {' '}
          Напитки{' '}
        </Link>
      </div>
      <div className="DivspanSection">
        <img src="/fruct.png" alt="фрукты" />
        <Link to="/categories/Фрукты" className="spanSection">
          {' '}
          Фрукты{' '}
        </Link>
      </div>
      <div className="DivspanSection">
        <img src="/hleb.png" alt="хлеб" />
        <Link to="/categories/Хлеб%20и%20выпечка" className="spanSection">
          {' '}
          Хлеб{' '}
        </Link>
      </div>
      <div className="DivspanSection">
        <img src="/fish.png" alt="хлеб" />
        <Link to="/categories/Рыба" className="spanSection">
          {' '}
          Рыба{' '}
        </Link>
      </div>
    </div>
  );
}

export default Section;
