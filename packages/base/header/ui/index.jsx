import './index.css';
import YygsLogo from '/yygs-logo.svg';

import { CartIndicator } from '@yygs/cart-indicator';

function Header() {
  return (
    <header className='header'>
      <img
        className='header__logo'
        src={YygsLogo}
        alt='Yygs logo'
      />
      <CartIndicator />
    </header>
  );
}

export { Header };
