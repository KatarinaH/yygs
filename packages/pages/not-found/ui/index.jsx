import './index.css';
import { Link } from 'react-router-dom';
import { Button } from '@yygs/button';
import { Header } from '@yygs/header'

function NotFound() {
  return (
    <div className='not-found'>
      <Header logo />
      <div className='not-found-container'>
        <h1>
          Hoppsan! <br /> Den här sidan finns inte...
        </h1>
          <Link to='/'>
            <Button
              type='regular'
              color='dark'
              text='Tillbaka till startsidan'
            />
          </Link>
      </div>
    </div>
  );
}

export { NotFound };