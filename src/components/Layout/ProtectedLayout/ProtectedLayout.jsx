import React from 'react';
import { Outlet } from 'react-router';
import { Header } from '../Header';

const ProtectedLayout = () => {
  console.log('hello');
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default ProtectedLayout;
