/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { addProduct } from './adminSlice';
import './Admin.css';

function AdminAddForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const categories = useSelector(
    (store: RootState) => store.adminProducts.categories
  );
  const name = useRef<HTMLInputElement>(null);
  const cost = useRef<HTMLInputElement>(null);
  const categoryI = useRef<HTMLSelectElement>(null);
  const description = useRef<HTMLInputElement>(null);
  const refImage = useRef<HTMLInputElement>(null);

  const addAdminProduct = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (
      refImage.current?.files?.length &&
      name.current?.value &&
      cost.current?.value &&
      categoryI.current?.value &&
      description.current?.value
    ) {
      const url = refImage.current.files;
      const nameInput = name.current.value;
      const costInput = cost.current.value;
      const categoryInput = categoryI.current.value;
      const descriptionInput = description.current.value;
      const formData = new FormData();
      for (const key in url) {
        formData.append('url', url[key]);
      }
      formData.append('name', nameInput);
      formData.append('cost', costInput);
      formData.append('category', categoryInput);
      formData.append('description', descriptionInput);
      dispatch(addProduct(formData));
    }
  };

  return (
    <div className="formAdmin">
      <form action="submit" onSubmit={addAdminProduct}>
        <input
          type="text"
          className="input_addItem"
          placeholder="Название товара"
          ref={name}
        />
        <input
          type="number"
          className="input_addItem"
          placeholder="Укажите цену"
          ref={cost}
        />
        <input type="file" id="file" ref={refImage} />
        <select name="category" ref={categoryI}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>
        <input
          type="text"
          className="input_descriptionItem"
          placeholder="Описание товара"
          ref={description}
        />
        <button type="submit" className="btn_addItem">
          Создать товар
        </button>
      </form>
    </div>
  );
}

export default AdminAddForm;
