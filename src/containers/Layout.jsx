import React from 'react';
import { HeaderMain } from '../components/HeaderMain';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const Layout = ({ children }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={isDark ? 'dark' : null}>
      <HeaderMain />
      {children}
    </div>
  );
};
