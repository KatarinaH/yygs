import { useGetMenuQuery } from '@yygs/api';
import { MultiPicker } from '@yygs/multi-picker';
import { SinglePick } from '@yygs/single-pick';

function MenuItems() {
  const { data, isError, isLoading } = useGetMenuQuery();

  if (isLoading) {
    return <h3>Laddar produkter...</h3>;
  }

  if (isError) {
    return <p>Fel vid laddning av meny</p>;
  }

 const wontonItems = data?.items.filter((item) => item.type === 'wonton');
 const dipItems = data?.items.filter((item) => item.type === 'dip');
 const drinkItems = data?.items.filter((item) => item.type === 'drink');


  return (
    <ul>
      {wontonItems.map((item) => (
        <SinglePick key={item.id} item={item} />
      ))}
      {dipItems.length > 0 && <MultiPicker items={dipItems} title='Dipsåser' />}
      {drinkItems.length > 0 && (
        <MultiPicker items={drinkItems} title='Drycker' />
      )}
    </ul>
  );
}

export { MenuItems };


