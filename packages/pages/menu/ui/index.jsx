import './index.css';

import { Header } from '@yygs/header';
import { useGetMenuQuery } from '@yygs/api';

function Menu() {
  const { data, isError, isLoading } = useGetMenuQuery();

  console.log(data, isError, isLoading);

  return (
    <main className='menu'>
      <Header />
      <div>
        <h1>Meny</h1>
      </div>
    </main>
  );
}

export { Menu };
