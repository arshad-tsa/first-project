import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Layout';

const UserDetails = () => {
  const urlParams = useParams();

  return (
    <>
      <Header />
      <div>This is User Details {urlParams.id}</div>
    </>
  );
};

export default UserDetails;
