import "./index.css";
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectCartItems } from '@yygs/cartreducer';
import { MenuItemTop } from '@yygs/menu-item-top';
import { Button } from '@yygs/button';

function MultiPicker({ items, title}) {
  const allPricesSame = items.every(item => item.price === items[0].price);
  const price = allPricesSame ? items[0].price : null;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  // Lägg till vald produkt i varukorgen, skicka med id och enhetspris
  const handleAddToCart = (id) => {
    dispatch(addToCart({ id, itemPrice: price }));
  };

  // Kolla om vald produkt redan finns i varukorgen för att sätta styling på knappen
  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  }

  return (
    <li className='multi-picker menu-item'>
      <MenuItemTop name={title} price={price} dottedline={{ length: 'short', color: 'white' }} />
      <ul className='multi-picker-buttons'>
        {items.map((item) => (
          <Button
            key={item.id}
            type='small'
            color='soft-brown'
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
MultiPicker.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export { MultiPicker };