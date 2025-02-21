import "./index.css";
import { Link } from 'react-router-dom';

import cartIcon from "/cart-icon.svg";

function CartIndicator() {
  return (
    <Link className='cart-indicator' to='/order-summary'>
      <img src={cartIcon} alt='Cart icon' />
      <span className='cart-count'>0</span>
    </Link>
  );
}

export { CartIndicator };