import './index.css';

import { DottedLine } from '@yygs/dotted-line';
import { Button } from '@yygs/button';

function SinglePick({item}) {
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
          type='small'
          color='soft-brown'
          onClick={() => {
            handleClick();
          }}
          text='Köp'
        ></Button>
      </div>
    </li>
  );
}

export { SinglePick };
