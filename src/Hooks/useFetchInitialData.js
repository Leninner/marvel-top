import { getHeroesInfo } from '../utils/getHeroesInfo';
import { useEffect, useState } from 'react';

export const useFetchInitialData = ({ limit = 20, offset = 0 }) => {
  const [information, setInformation] = useState({ loading: true, error: null, data: [] });

  useEffect(() => {
    getHeroesInfo({ limit, offset }).then((response) =>
      setInformation({
        loading: false,
        error: null,
        data: response,
      })
    );
  }, []);

  return { information };
};
