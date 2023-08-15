import React from 'react';
import './Search.css';

export default function Search(): JSX.Element {
  return (
    <div>
      <div className="Search" />
      <form action="submit">
        <input
          type="text"
          className="InputSearch"
          placeholder="Введите название товара"
        />
        <button type="submit" className="buttonSearch">
          поиск
        </button>
      </form>
    </div>
  );
}
