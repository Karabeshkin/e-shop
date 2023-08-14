import React from 'react';

function AdminAddForm(): JSX.Element {
  return (
    <div>
      <form action="submit">
        <div>
          <input
            type="text"
            className="input_addItem"
            placeholder="Название товара"
          />
          <input
            type="number"
            className="input_addItem"
            placeholder="Укажите цену"
          />
          <select name="category" id="">
            <option value="1">Чай</option>
            <option value="2">Крупы</option>
            <option value="3">Макароны</option>
          </select>
          <input
            type="text"
            className="input_descriptionItem"
            placeholder="Описание товара"
          />
        </div>
        <button type="submit" className="btn_addItem">
          Создать товар
        </button>
      </form>
    </div>
  );
}

export default AdminAddForm;
