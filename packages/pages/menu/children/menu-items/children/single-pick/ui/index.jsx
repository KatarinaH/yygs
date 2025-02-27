import './index.css';

import { useDispatch } from 'react-redux';
import { addToCart } from '@yygs/cartreducer';
import { DottedLine } from '@yygs/dotted-line';
import { Button } from '@yygs/button';

function SinglePick({item}) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id: item.id, itemPrice: item.price }));
  }

  return (
    <li className='single-pick menu-item'>
      <div className='menu-item-top'>
        <h2>{item.name}</h2>
        <DottedLine length='short' color='white' />
        <p>{item.price} SEK</p>
      </div>
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

export { SinglePick };
