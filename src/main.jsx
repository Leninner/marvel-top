import React from 'react';
import { render } from 'react-dom';
import './index.css';
import MarvelApp from './routes/MarvelApp';
import { ThemeContextProvider } from './context/ThemeContext';

render(
  <ThemeContextProvider>
    <MarvelApp />
  </ThemeContextProvider>,
  document.getElementById('root')
);
