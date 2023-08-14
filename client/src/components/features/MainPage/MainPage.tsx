import React from 'react';
import './MainPage.css';

export default function MainPage(): JSX.Element {
  return (
    <div>
      <div className="main_page_div">
        <img src="https://s1.1zoom.ru/big0/144/377649-svetik.jpg" alt="обои" />
      </div>
      <div className="MainWelcome">
        <img
          src="https://prodbaza1.ru/images/statya-blog/bakaleya-1000x500.jpg"
          alt="лучшее качество"
        />
        <div className="H1">Лучшее качество</div>
      </div>
    </div>
  );
}
