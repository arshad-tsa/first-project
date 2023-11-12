import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Users, UserDetails } from './Page';
import { ROUTE_CONSTANTS } from './CommonConstant';

const App = () => {
  const { HOME_ROUTE, USERS_ROUTE } = ROUTE_CONSTANTS;
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<Home />} />
      <Route path={USERS_ROUTE} element={<Users />} />
      <Route path={`${USERS_ROUTE}/:id`} element={<UserDetails />} />
    </Routes>
  );
};

export default App;
