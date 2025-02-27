import './index.css';
import { DottedLine } from '@yygs/dotted-line';

function Product ({item}) {
  const totalPricePerItem = item.price * item.quantity;
  const additionalInfo = item.type === 'dip' ? 'Dip' : '';
  return (
    <li className='product'>
      <div className='menu-item-top'>
        <h2>
          {item.name} {additionalInfo}
        </h2>
        <DottedLine length='long' color='black' />
        <p>{totalPricePerItem} SEK</p>
      </div>
      <p className='quantity'>{item.quantity} Stycken</p>
    </li>
  );
}

export { Product };