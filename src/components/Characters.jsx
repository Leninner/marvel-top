import { useFetchInitialData } from '../Hooks/useFetchInitialData';
import { CharacterCard } from './CharacterCard';

export const Characters = () => {
  const { data, loading, error } = useFetchInitialData({ limit: 20, offset: 660 });

  return (
    <div className='grid w-full grid-cols-1 lg:container md:grid-cols-2 lg:grid-cols-3 place-items-center'>
      {loading && <p className='text-3xl text-white'>Loading...</p>}
      {data.map((value) => {
        return <CharacterCard {...value} />;
      })}
    </div>
  );
};
