import React, { useContext } from 'react';
import { AuthContext } from '../../authContext/AuthContext';
import Events from './Events';

const MyPostedEvents = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Events email={user.email}></Events>
    </div>
  );
};

export default MyPostedEvents;
