import './index.css';
import YygsLogo from '/yygs-logo.svg';
import YygsLogoDark from '/yygs-logo-dark.svg';
import cartIcon from "/cart-icon.svg";
import { Link } from 'react-router-dom';
import { CartIndicator } from '@yygs/cart-indicator';

function Header({logo, cartIconOnly, cartCount, darkLogo}) {
  return (
    <header className='header'>
      {darkLogo && (
        <Link to='/'>
          <img className='header__logo' src={YygsLogoDark} alt='Yygs logo' />
        </Link>
      )}
      {logo && (
        <Link to='/'>
          <img className='header__logo' src={YygsLogo} alt='Yygs logo' />
        </Link>
      )}
      {cartIconOnly && <img src={cartIcon} alt='Cart icon' />}
      {cartCount && <CartIndicator cartIcon={cartIcon} />}
    </header>
  );
}

export { Header };
