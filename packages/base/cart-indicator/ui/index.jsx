import "./index.css";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems } from '@yygs/cartreducer';


function CartIndicator({cartIcon}) {
  const cart = useSelector(selectCartItems);
  const totalCartQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link className='cart-indicator' to='/order-summary'>
      <img src={cartIcon} alt='Cart icon' />
      <span className='cart-count'>{totalCartQuantity}</span>
    </Link>
  );
}

export { CartIndicator };