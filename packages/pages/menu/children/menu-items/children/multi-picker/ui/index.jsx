import "./index.css";

import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectCartItems } from '@yygs/cartreducer';
import { DottedLine } from '@yygs/dotted-line';
import { Button } from '@yygs/button';

function MultiPicker({ items, title}) {
  const allPricesSame = items.every(item => item.price === items[0].price);
  const price = allPricesSame ? items[0].price : null;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleAddToCart = (id) => {
    dispatch(addToCart({ id, itemPrice: price }));
  };

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  }

  return (
    <li className='multi-picker menu-item'>
      <div className='menu-item-top'>
        <h2>{title}</h2>
        <DottedLine length='short' color='white' />
        {price && <p>{price} SEK</p>}
      </div>
      <ul className='multi-picker-buttons'>
        {items.map((item) => (
          <Button
            key={item.id}
            type="small"
            color="soft-brown"
            onClick={() => {
              handleAddToCart(item.id);
            }}
            text={item.name}
            inCart={isInCart(item.id) ? 'in-cart' : ''}
          ></Button>
        ))}
      </ul>
    </li>
  );
}

export { MultiPicker };