import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic, e.g., validate credentials and make API call
    // Example API call using Axios:
    // axios.post('/api/login', { username, password })
    //   .then(response => {
    //     onLogin(response.data); // Pass user data to parent component
    //   })
    //   .catch(error => {
    //     console.error('Login error:', error);
    //   });
  };

  return (
    <div>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;