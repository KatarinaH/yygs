import { createBrowserRouter } from 'react-router-dom';

import { Menu } from '@yygs/menu';
import { OrderSummary } from '@yygs/order-summary';
import { Eta } from '@yygs/eta';
import { Receipt } from '@yygs/receipt';
import { NotFound } from '@yygs/not-found';


const router = createBrowserRouter([
  { path: '/', element: <Menu /> },
  { path: '/order-summary', element: <OrderSummary /> },
  { path: '/eta', element: <Eta /> },
  { path: '/receipt', element: <Receipt /> },
  { path: '*', element: <NotFound /> },
]);

export { router };
