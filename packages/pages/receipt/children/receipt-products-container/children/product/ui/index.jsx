import './index.css';
import { MenuItemTop } from '@yygs/menu-item-top';

function Product ({item}) {
  const totalPricePerItem = item.price * item.quantity;
  const additionalInfo = item.type === 'dip' ? 'Dip' : '';
  return (
    <li className='product'>
      <MenuItemTop
        name={item.name}
        additionalInfo={additionalInfo}
        price={totalPricePerItem}
        dottedline={{ length: 'long', color: 'black' }}
      />
      <p className='quantity'>{item.quantity} Stycken</p>
    </li>
  );
}

export { Product };