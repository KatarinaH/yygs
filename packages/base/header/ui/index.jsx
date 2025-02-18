import './index.css';
import YygsLogo from '/yygs-logo.svg';

function Header() {
  return (
    <header className='header'>
      <img
        className='header__logo'
        src={YygsLogo}
        alt='Yygs logo'
      />
      
    </header>
  );
}

export { Header };
