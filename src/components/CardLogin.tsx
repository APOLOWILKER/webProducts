import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const CardLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex justify-center items-center h-screen w-2/3">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <Header header="Login" />
        <div className="mb-4">
        <label htmlFor="email" className="block my-2 text-black font-extrabold">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 text-black font-extrabold">Senha</label>
          <input
            type="password"
            id="password"

            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <button onClick={handleLogin} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          Login
        </button>
        <div className='my-2'>
          <span>Ainda não tem uma conta?</span>
          <Link to="/signup">
            <a href='#' className='text-blue-600'> Cadastre-se</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardLogin;
