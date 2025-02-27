import "./index.css"
import { DottedLine } from "@yygs/dotted-line";

function MenuItemTop({ name, additionalInfo = '', price, dottedline }) {
  return (
    <div className='menu-item-top'>
      <h2>
        {name} {additionalInfo}
      </h2>
      <DottedLine length={dottedline.length} color={dottedline.color} />
      <p>{price} SEK</p>
    </div>
  );
}

export { MenuItemTop };