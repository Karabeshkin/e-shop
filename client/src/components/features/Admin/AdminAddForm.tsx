import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { addProduct } from './adminSlice';
import './Admin.css'

function AdminAddForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const categories = useSelector(
    (store: RootState) => store.adminProducts.categories
  );

  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [categoryId, setCategoryId] = useState(1);
  const [description, setDescription] = useState('');

  const addAdminProduct = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(
      addProduct({
        name,
        cost: Number(cost),
        categoryId,
        description,
      })
    );

    setName('');
    setCost('');
    setCategoryId(1);
    setDescription('');
  };

  return (
    <div className='formAdmin'>
      <form
        action="submit"
        onSubmit={addAdminProduct}
        style={{ width: '1200px', marginLeft: '200px' }}
      >
        <div >
          <input
            type="text"
            className="input_addItem"
            placeholder="Название товара"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            className="input_addItem"
            placeholder="Укажите цену"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
          <select
            name="category"
            onChange={(e) => setCategoryId(Number(e.target.value))}
          >
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.title}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="input_descriptionItem"
            placeholder="Описание товара"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
