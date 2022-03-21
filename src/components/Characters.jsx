import { useFetchInitialData } from '../Hooks/useFetchInitialData';
import { CharacterCard } from './CharacterCard';

export const Characters = () => {
  const { information } = useFetchInitialData({ limit: 20, offset: 600 });
  const { data } = information;

  return (
    <div className='grid w-full grid-cols-1 md:w-11/12 lg:container md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center'>
      {data.map((value) => {
        return <CharacterCard {...value} />;
      })}
    </div>
  );
};
