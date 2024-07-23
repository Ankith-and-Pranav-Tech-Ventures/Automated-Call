import React, { useContext, useState } from 'react';
import { Context } from '../../Context/ContextProvider';

const Login = () => {
  const { login } = useContext(Context);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    // Perform authentication logic here
    // For demo purposes, we'll assume the user is authenticated
    const user = { name: username };
    login(user);
  };

  return (
    <div>
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Enter username" 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
