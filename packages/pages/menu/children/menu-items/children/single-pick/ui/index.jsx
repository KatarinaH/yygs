import './index.css';

import { DottedLine } from '@yygs/dotted-line';

function SinglePick({item}) {
  return (
    <li className='single-pick menu-item'>
      <div className='menu-item-top'>
        <h2>{item.name}</h2>
        <DottedLine length='short' color='white' />
        <p>{item.price} SEK</p>
      </div>
      <ul className='ingredients'>
        <li>{item.ingredients.join(', ')}</li>
      </ul>
      <button>Lägg till</button>
    </li>
  );
}

export { SinglePick };
