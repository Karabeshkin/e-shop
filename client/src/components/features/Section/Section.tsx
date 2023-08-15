import React from 'react';
import './Section.css';

function Section(): JSX.Element {
  return (
    <div className="Section">
      <div className="DivspanSection">
        <img src="./raznoe.png" alt="разное" />
        <span className="spanSection"> На разные случаи </span>
      </div>
      <div className="DivspanSection">
        <img src="./gotovo.png" alt="напитки " />
        <span className="spanSection"> Напитки </span>
      </div>
      <div className="DivspanSection">
        <img src="./gotovoe.png" alt="готовая еда" />
        <span className="spanSection"> Готовая еда </span>
      </div>
      <div className="DivspanSection">
        <img src="./ovoshi.png" alt="овощи" />
        <span className="spanSection"> Овощи</span>
      </div>
      <div className="DivspanSection">
        <img src="./fruct.png" alt="фрукты" />
        <span className="spanSection"> Фрукты </span>
      </div>
      <div className="DivspanSection">
        <img src="./cardSection..png" alt="мясо" />
        <span className="spanSection"> Мясо и рыба </span>
      </div>
      <div className="DivspanSection">
        <img src="./chips.png" alt="чипсы" />
        <span className="spanSection"> Снеки </span>
      </div>
      <div className="DivspanSection">
        <img src="./hleb.png" alt="хлеб" />
        <span className="spanSection"> Хлеб и выпечка </span>
      </div>
    </div>
  );
}

export default Section;
