import React from 'react';
import { OrderInc } from './type';

function AdminOrderCard({ order }: { order: OrderInc }): JSX.Element {
  return (
    <div>
      <div>{`Заказ №${order.id}, ${order.User.name}, ${order.User.phone} `}</div>
      <div>
        {order.OrderItems.map((el) => (
          <div key={el.id}>{`${el.Product.title} : ${el.count}шт`}</div>
        ))}
      </div>
    </div>
  );
}

export default AdminOrderCard;
