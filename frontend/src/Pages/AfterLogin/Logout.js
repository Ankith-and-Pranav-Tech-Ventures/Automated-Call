import React, { useContext } from 'react';
import { Context } from '../../Context/ContextProvider';

const Logout = () => {
  const { logout } = useContext(Context);

  return (
    <button onClick={logout}>Logout</button>
  );
};

export default Logout;
