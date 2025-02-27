import './index.css';
import { Header } from '@yygs/header';
import { ReceiptProductsContainer } from '@yygs/receipt-products-container/ui';
import { Button } from '@yygs/button';

function Receipt() {

  const handleClick = (url) => {
    // Navigera till startsidan och ersätt den nuvarande sidan i historiken
    window.location.replace(url);
  };

  return (
    <main className='receipt'>
      <Header logo />
      <div className='receipt__container'>
        <ReceiptProductsContainer />
        <div className='receipt__container--button'>
          <Button
            text='Gör en ny beställning'
            type='regular'
            color='dark'
            onClick={() => {
              handleClick('/');
            }}
          />
        </div>
      </div>
    </main>
  );
}

export { Receipt };
