import { Home } from '../pages/Home';
import { Layout } from '../containers/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function MarvelApp() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default MarvelApp;
