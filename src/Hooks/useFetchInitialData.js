import { getHeroesInfo } from '../utils/getHeroesInfo';
import { useEffect, useState } from 'react';

export const useFetchInitialData = () => {
  const [information, setInformation] = useState({ loading: true, error: null, data: [] });

  useEffect(() => {
    getHeroesInfo().then((response) =>
      setInformation({
        loading: false,
        error: null,
        data: response,
      })
    );
  }, []);

  return { information };
};
