import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const urlParams = useParams();

  return (
    <>
      <div>This is User Details {urlParams.id}</div>
    </>
  );
};

export default UserDetails;
