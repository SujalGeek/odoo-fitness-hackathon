import React, { useState } from 'react';
import axios from '../axiosConfig';

function Auth() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      const endpoint = isLogin ? '/auth/login' : '/auth/register';
      const payload = isLogin ? { email, password } : { name, email, password };
      const response = await axios.post(endpoint, payload, {
        withCredentials: true,
      });
      localStorage.setItem('token', response.data.token);
      // Redirect to profile or dashboard
      window.location.href = '/profile';
    } catch (error) {
      console.error('Error:', error);
      setError(error.response?.data?.error || 'An error occurred');
    }
  };

  return (
    <div className='container auth-container'>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      {!isLogin && (
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className='error'>{error}</p>}
      <button onClick={handleSubmit}>{isLogin ? 'Login' : 'Register'}</button>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Switch to Register' : 'Switch to Login'}
      </button>
    </div>
  );
}

export default Auth;
