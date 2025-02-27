import './index.css';
import redLogo from '/red_logo.png';
import { Product } from '@yygs/product';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectPlacedOrderData } from '@yygs/cartreducer';

function ReceiptProductsContainer() {
  const placedOrderData = useSelector(selectPlacedOrderData);
  const navigate = useNavigate();
  const orderItems = [];

  // Om det inte finns någon orderdata eller om den är tom, skicka tillbaka användaren till startsidan
  useEffect(() => {
    if (!placedOrderData || Object.keys(placedOrderData).length === 0) {
      navigate('/');
    }
  }, [placedOrderData, navigate]);

  if (!placedOrderData || !placedOrderData.order) {
    return null;
  }
  
  // Fyll orderItems med data från placedOrderData. Om produkten inte redan finns i listan lägg till det, annars öka antalet.
  placedOrderData.order.items.forEach((item) => {
    const existingItem = orderItems.find(
      (orderItem) => orderItem.id === item.id
    );
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      orderItems.push({
        id: item.id,
        name: item.name,
        type: item.type,
        quantity: 1,
        price: item.price,
      });
    }
  });
  return (
    <div className='receipt__container--products'>
      <img className='receipt__logo' src={redLogo} alt='red logo' />
      <h1 className='receipt__heading'>Kvitto</h1>
      <p className='receipt__text'>Orderid: {placedOrderData.order.id}</p>
      <ul>
        {orderItems.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </ul>
      <div className='order-summary__total'>
        <p className='order-summary__total--text'>
          Total <br />
          <span>inkl 20% moms</span>
        </p>
        <p className='order-summary__total--sum'>
          {placedOrderData.order.orderValue} SEK
        </p>
      </div>
    </div>
  );
}

export { ReceiptProductsContainer };