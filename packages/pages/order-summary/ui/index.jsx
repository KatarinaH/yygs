import './index.css';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { usePlaceOrderMutation } from '@yygs/api';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCartItems,
  selectTotalCartValue,
  selectOrderItems,
  placedOrderData
} from '@yygs/cartreducer';
import { Header } from '@yygs/header';
import { Button } from '@yygs/button';
import { CartItem } from '@yygs/cart-item';

function OrderSummary() {
  const cartItems = useSelector(selectCartItems);
  const TotalCartValue = useSelector(selectTotalCartValue);
  const orderItems = useSelector(selectOrderItems);
  const [placeOrder] = usePlaceOrderMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePlaceOrder = async () => {
    const order = { items: orderItems };
    try {
      const result = await placeOrder(order).unwrap();
      dispatch(placedOrderData({ result }));
      navigate('/eta');
    } catch (error) {
      console.error('Något blev fel med din order:', error);
    }
  };


  return (
    <main className='order-summary'>
      <Header darkLogo cartIconOnly />
      {cartItems?.length === 0 ? (
        <div className='order-summary__container'>
          <p>Det finns inga produkter i din varukorg..</p>
          <Link to='/'>
            <Button type='regular' color='dark' text='Tillbaka till menyn' />
          </Link>
        </div>
      ) : (
        <div className='order-summary__container'>
          <ul>
            {cartItems.map((item) => (
              <CartItem key={item.id} id={item.id} quantity={item.quantity} />
            ))}
          </ul>
          <div className='order-summary__container--bottom'>
            <div className='order-summary__total'>
              <p className='order-summary__total--text'>Total</p>
              <p className='order-summary__total--sum'>{TotalCartValue} SEK</p>
            </div>
            <Button
              type='regular'
              color='dark'
              onClick={() => {
                handlePlaceOrder();
              }}
              text='Take my money!'
            />
          </div>
        </div>
      )}
    </main>
  );
}

export { OrderSummary };
