import React from 'react';
import { OrderInc } from './type';

function AdminOrderCard({ order }: { order: OrderInc }): JSX.Element {
  return (
    <div className="orderCard">
      <div className="orderHeader">{`Заказ №${order.id}, ${order.User.name}`}</div>
      <div className="orderHeader">{`Телефон: ${order.User.phone}`}</div>
      <div className="orderValue">
        {order.OrderItems.map((el) => (
          <div key={el.id}>{`${el.Product.title} : ${el.count}шт`}</div>
        ))}
      </div>
    </div>
  );
}

export default AdminOrderCard;
