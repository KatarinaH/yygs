import './index.css';

import { Header } from '@yygs/header';

import { MenuItems } from '@yygs/menu-items';

function Menu() {
  return (
    <main className='menu'>
      <Header logo cartCount />
      <div className='menu-container'>
        <h1>Meny</h1>
        <MenuItems />
      </div>
    </main>
  );
}

export { Menu };
