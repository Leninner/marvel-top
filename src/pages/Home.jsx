import { MainView } from '../containers/MainView';
import { Characters } from '../components/Characters';
import { Searcher } from '../components/Searcher';

export const Home = () => {
  return (
    <div className='flex flex-col items-center'>
      <MainView />
      <Searcher />
      <Characters />
    </div>
  );
};
