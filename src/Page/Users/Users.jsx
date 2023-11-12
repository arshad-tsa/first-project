import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Layout';
import { ROUTE_CONSTANTS } from '../../CommonConstant';

const Users = () => (
  <>
    <Header />
    <div>This is Users</div>
    <ul>
      <li>
        <Link to={`/${ROUTE_CONSTANTS.USERS_ROUTE}/1`}>User 1</Link>
      </li>
      <li>
        <Link to={`/${ROUTE_CONSTANTS.USERS_ROUTE}/2`}>User 2</Link>
      </li>
    </ul>
  </>
);

export default Users;
