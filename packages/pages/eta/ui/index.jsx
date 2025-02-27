import './index.css';
import boxTop from '/boxtop.png';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@yygs/header';
import { Button } from '@yygs/button';
import { useSelector } from 'react-redux';
import { selectPlacedOrderData } from '@yygs/cartreducer';

function Eta() {
  const placedOrderData = useSelector(selectPlacedOrderData);
  const navigate = useNavigate();
  const [remainingMinutes, setRemainingMinutes] = useState(0);

  // Om det inte finns någon orderdata eller om den är tom, skicka tillbaka användaren till startsidan
  useEffect(() => {
    if (!placedOrderData || Object.keys(placedOrderData).length === 0) {
      navigate('/');
    }
  }, [placedOrderData, navigate]);

 useEffect(() => {
   const orderEtaTime = new Date(placedOrderData.order.eta);

   // Räkna ut hur många minuter det är kvar
   const updateRemainingMinutes = () => {
     const now = new Date();
     const diffMs = orderEtaTime - now;
     setRemainingMinutes(Math.ceil(diffMs / 60000));
   };

   // Påbörja räkningen
   updateRemainingMinutes();

   // Uppdatera varje minut
   const timer = setInterval(updateRemainingMinutes, 60000);

   return () => clearInterval(timer);
 }, [placedOrderData]);

 const isReady = remainingMinutes <= 0;

 const handleClick = (url, resetOrder) => {
    if (resetOrder) {
      window.location.replace(url);
    } else {
      navigate(url);
    }
 }

 if (!placedOrderData || !placedOrderData.order) {
   return null;
 }

  return (
    <main className='eta'>
      <Header logo />
      <div className='eta__container'>
        <img className='eta__box-top' src={boxTop} alt='box top' />
        <h1 className='eta__heading'>
          {isReady ? 'Din beställning är klar!' : 'Dina wontons tillagas!'}
        </h1>
        {!isReady && (
          <h2 className='eta__eta-time'>ETA {remainingMinutes} MIN</h2>
        )}
        <p className='eta__order-id'>Orderid: {placedOrderData.order.id}</p>

        <div className='eta__button-container'>
          <Button
            text='Gör en ny beställning'
            type='regular margin-bottom'
            color='dark'
            onClick={() => {
              handleClick('/', true);
            }}
          />
          <Button
            text='Se Kvitto'
            type='regular'
            color='transparent'
            onClick={() => {
              handleClick('/receipt', false);
            }}
          />
        </div>
      </div>
    </main>
  );
}

export { Eta };
