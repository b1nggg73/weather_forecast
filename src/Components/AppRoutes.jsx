import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from '../routes';

const AppRoutes = () => {
  return (
    <Routes>
      {publicRoutes.map((route, index) => (
        <Route path={route.path} element={route.element} key={index}></Route>
      ))}
    </Routes>
  );
};

export default AppRoutes;
