import './index.css';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { addToCart } from '@yygs/cartreducer';
import { Button } from '@yygs/button';
import { MenuItemTop } from '@yygs/menu-item-top';

function SinglePick({item}) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id: item.id, itemPrice: item.price }));
  }

  return (
    <li className='single-pick menu-item'>
      <MenuItemTop
        name={item.name}
        price={item.price}
        dottedline={{ length: 'short', color: 'white' }}
      />
      <div className='menu-item-content'>
        <ul className='ingredients'>
          <li>{item.ingredients.join(', ')}</li>
        </ul>
        <Button
          key={item.id}
          type='small'
          color='soft-brown'
          onClick={() => {
            handleAddToCart();
          }}
          text='Köp'
        ></Button>
      </div>
    </li>
  );
}
SinglePick.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export { SinglePick };
