import { useFetchInitialData } from '../Hooks/useFetchInitialData';
import { CharacterCard } from './CharacterCard';

export const Characters = () => {
  const { information } = useFetchInitialData({ limit: 20, offset: 600 });
  const { data } = information;

  return (
    <div className='grid w-full grid-cols-1 lg:container md:grid-cols-2 lg:grid-cols-3 place-items-center'>
      {data.map((value) => {
        return <CharacterCard {...value} />;
      })}
    </div>
  );
};
