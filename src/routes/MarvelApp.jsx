import { Home } from '../pages/Home';
import { Layout } from '../containers/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CharacterInfoPage } from '../pages/CharacterInfoPage';

function MarvelApp() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characterInfo/:id/:characterName' element={<CharacterInfoPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default MarvelApp;
