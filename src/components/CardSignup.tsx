import React, { useState } from 'react';
import Header from './Header';

const CardSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex justify-center items-center h-screen w-2/3">
      <div className="bg-white p-10 rounded-lg shadow-md">
        <Header header="Cadastro" />
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
          <label htmlFor="password"  className="block my-2 text-black font-extrabold">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <button onClick={handleSignup} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          Cadastrar
        </button>
      </div>
    </div>
  );
};

export default CardSignup;
