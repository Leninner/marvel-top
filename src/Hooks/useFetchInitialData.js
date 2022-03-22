import { getHeroesInfo } from '../utils/getHeroesInfo';
import { useEffect, useState } from 'react';

export const useFetchInitialData = ({ limit = 20, offset = 0 }) => {
  const [information, setInformation] = useState({ loading: true, error: '', data: [] });

  useEffect(() => {
    setInformation({ loading: true, error: '', data: [] });

    getHeroesInfo({ limit, offset })
      .then((response) =>
        setInformation({
          ...information,
          loading: false,
          data: response,
        })
      )
      .catch((error) => setInformation({ loading: false, error, data: [] }));
  }, []);

  const { loading, error, data } = information;

  return { loading, error, data };
};
