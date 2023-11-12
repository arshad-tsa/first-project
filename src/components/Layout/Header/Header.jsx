import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_CONSTANTS } from '../../../CommonConstant';

const Header = () => {
  const { HOME_ROUTE, USERS_ROUTE } = ROUTE_CONSTANTS;
  return (
    <>
      <nav>
        <Link to={HOME_ROUTE}>Home</Link>|<Link to={USERS_ROUTE}>Users</Link>
      </nav>
    </>
  );
};

export default Header;
