import React from 'react';
import './Section.css';
import { Link } from 'react-router-dom';

function Section(): JSX.Element {
  return (
    <div className="Section">
      <div className="DivspanSection">
        <img src="./raznoe.png" alt="разное" />
        <span className="spanSection"> На разные случаи </span>
      </div>
      <div className="DivspanSection">
        <img src="./gotovo.png" alt="напитки " />
        <Link to="/categories/Чай" className="spanSection">
          {' '}
          Чай{' '}
        </Link>
      </div>
      <div className="DivspanSection">
        <img src="./gotovoe.png" alt="готовая еда" />
        <Link to="/categories/Чай" className="spanSection">
          {' '}
          Крупы{' '}
        </Link>
      </div>
      <div className="DivspanSection">
        <img src="./ovoshi.png" alt="овощи" />
        <Link to="/categories/Овощи" className="spanSection">
          {' '}
          Овощи
        </Link>
      </div>
      <div className="DivspanSection">
        <img src="./fruct.png" alt="фрукты" />
        <Link to="/categories/Фрукты" className="spanSection">
          {' '}
          Фрукты{' '}
        </Link>
      </div>
      <div className="DivspanSection">
        <img src="./cardSection..png" alt="мясо" />
        <Link to="/categories/Мясо" className="spanSection">
          Мясо
        </Link>
      </div>
      <div className="DivspanSection">
        <img src="./chips.png" alt="чипсы" />
        <Link to="/categories/Рыба" className="spanSection">
          {' '}
          Снеки{' '}
        </Link>
      </div>
      <div className="DivspanSection">
        <img src="./hleb.png" alt="хлеб" />
        <Link to="/categories/Хлеб" className="spanSection">
          {' '}
          Хлеб и выпечка{' '}
        </Link>
      </div>
    </div>
  );
}

export default Section;
