import { useFetchInitialData } from '../Hooks/useFetchInitialData';
import { CharacterCard } from './CharacterCard';
import { Pagination } from './Pagination';
import { useState } from 'react';

export const Characters = () => {
  const [page, setPage] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isPreviousPage, setIsPreviousPage] = useState(false);

  const onPreviousPage = () => {
    if (page === 0) return;

    setPage(page - 1);
    setIsPreviousPage(true);
  };

  const onNextPage = () => {
    if (!isPreviousPage) {
      setOffset(offset + 20);
    }

    setIsPreviousPage(false);
    setPage(page + 1);
  };

  const { loading, data, error } = useFetchInitialData({ limit: 20, offset });

  const charactersToShow = data[page]?.results.filter(
    ({ thumbnail }) => !thumbnail.path.includes('image_not_available')
  );

  return (
    <>
      <div className='grid w-full grid-cols-1 lg:container md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {loading && <p className='text-3xl text-white'>Loading...</p>}

        {charactersToShow?.map((value) => {
          return <CharacterCard {...value} />;
        })}

        {error && <p className='text-3xl text-white'>Error...</p>}
      </div>
      <Pagination onPreviousPage={onPreviousPage} onNextPage={onNextPage} />
    </>
  );
};
