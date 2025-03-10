import "./index.css";

import { useGetSingleMenuItemQuery } from "@yygs/api";
import { useDispatch } from 'react-redux';
import {
  addToCart,
  decreaseQuantity,
  updateTotalCartValue,
  deleteProduct,
} from '@yygs/cartreducer';
import { MenuItemTop } from '@yygs/menu-item-top';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function CartItem({ id, quantity }) {
  const { data, error, isLoading } = useGetSingleMenuItemQuery(id);
  const dispatch = useDispatch();
  const [totalPricePerItem, setTotalPricePerItem] = useState(0);

  useEffect(() => {
    if (data && data.item) {
      setTotalPricePerItem(quantity * data.item.price);
      dispatch(updateTotalCartValue());
    }
  }, [quantity, data, dispatch, id,totalPricePerItem]);

  // Lägg till en produkt med detta id i varukorgen
  const handleAddToCart = () => {
    dispatch(addToCart({ id: data?.item.id }));
  };

  const handleDecreaseCart = () => {
    //Minska värdet med en på detta id. Om det bara finns en produkt i varukorgen med detta id tas produkten bort helt och varukorgens totala värde uppdateras
    if (quantity === 1) {
      dispatch(deleteProduct({ id: data?.item.id }));
      dispatch(updateTotalCartValue());
    }
    dispatch(decreaseQuantity({ id: data?.item.id }));
  };

  // Ta bort produkt med detta id från varukorgen och uppdatera varukorgens totala värde
  const handleDeleteProduct = () => {
    dispatch(deleteProduct({ id: data?.item.id }));
    dispatch(updateTotalCartValue());
  };

  if (isLoading) return <li>Laddar...</li>;
  if (error) return <li>Ett fel uppstod när produkterna skulle läsas in...</li>;

  return (
    <li className='cart-item'>
      <MenuItemTop
        name={data.item.name}
        price={totalPricePerItem}
        dottedline={{ length: 'long', color: 'black' }}
      />
      <button
        className='remove'
        title='Ta bort produkt'
        onClick={handleDeleteProduct}
      >
        <img className='button-icon' src='/delete.png' alt='delete' />
      </button>
      <div className='cart-item-bottom'>
        <button className='decrease' onClick={handleDecreaseCart}>
          <img className='button-icon' src='/minus.png' alt='decrease' />
        </button>
        <input
          className='totalPriceCartItem'
          type='number'
          id='number'
          value={quantity}
          readOnly
        />
        <button className='increase' onClick={handleAddToCart}>
          <img className='button-icon' src='/plus.png' alt='increase' />
        </button>
      </div>
    </li>
  );
}

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export { CartItem };