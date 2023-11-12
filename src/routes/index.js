import React from 'react';
import { Routes, Route } from 'react-router';
import { ProtectedLayout } from '../components/Layout';
import { routesConfig } from './routes-config';

const AppRoutes = () => (
  <Routes>
    <Route element={<ProtectedLayout />}>
      {routesConfig.map(value => (
        <Route key={value.path} path={value.path} element={value.component} />
      ))}
    </Route>
  </Routes>
);

export default AppRoutes;
