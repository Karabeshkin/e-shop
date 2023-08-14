import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Product } from './type';
import { RootState, useAppDispatch } from '../store/store';
import { updProduct } from './adminSlice';

function AdminUpdateForm({ product }: { product: Product }): JSX.Element {
  console.log(product);

  const dispatch = useAppDispatch();
  const categories = useSelector(
    (store: RootState) => store.adminProducts.categories
  );

  const [name, setName] = useState(product.title);
  const [cost, setCost] = useState(product.cost);
  const [categoryId, setCategoryId] = useState(product.category_id);
  const [description, setDescription] = useState(product.description);
  const updAdminProduct = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(
      updProduct({
        id: product.id,
        name,
        cost: Number(cost),
        categoryId,
        description,
      })
    );
  };

  return (
    <div style={{ width: '200px' }}>
      <form action="submit" onSubmit={updAdminProduct}>
        <div>
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
            onChange={(e) => setCost(Number(e.target.value))}
          />
          <select
            name="category"
            onChange={(e) => setCategoryId(Number(e.target.value))}
          >
            {categories.map((category) => (
              <option value={category.id}>{category.title}</option>
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
          Добавить изменения
        </button>
      </form>
    </div>
  );
}

export default AdminUpdateForm;
