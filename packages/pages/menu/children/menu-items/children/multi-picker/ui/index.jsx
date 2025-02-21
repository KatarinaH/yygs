import "./index.css";
import { DottedLine } from '@yygs/dotted-line';
import { Button } from '@yygs/button';

function MultiPicker({ items, title}) {
  const allPricesSame = items.every(item => item.price === items[0].price);
  const price = allPricesSame ? items[0].price : null;

  const handleClick = () => {
    console.log('clicked');
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
              handleClick();
            }}
            text={item.name}
          ></Button>
        ))}
      </ul>
    </li>
  );
}

export { MultiPicker };