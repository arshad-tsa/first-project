import React from 'react';
import { ROUTE_CONSTANTS } from '../CommonConstant';
import { Home, UserDetails, Users } from '../Page';

const { HOME_ROUTE, USERS_ROUTE } = ROUTE_CONSTANTS;
export const routesConfig = [
  {
    path: HOME_ROUTE,
    component: <Home />,
  },
  {
    path: USERS_ROUTE,
    component: <Users />,
  },
  {
    path: `${USERS_ROUTE}/:id`,
    component: <UserDetails />,
  },
];
