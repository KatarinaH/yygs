import './index.css';
import { Link } from 'react-router-dom';
import { Header } from '@yygs/header'

function NotFound() {
  return (
    <div className='not-found'>
      <Header logo />
      <div className='not-found-container'>
      <h1>
        Hoppsan! <br/> Den här sidan finns inte... <br/>
        <Link to='/'>Kom tillbaka till startsidan</Link>
      </h1>
      </div>
    </div>
  );
}

export { NotFound };