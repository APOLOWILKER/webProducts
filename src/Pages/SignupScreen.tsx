import React from 'react';
import { Link } from 'react-router-dom';
import CardSignup from '../components/CardSignup';

const SignupScreen: React.FC = () => {
  return (
    <>
        <div className="flex justify-center items-center h-screen bg-black text-white">
      <CardSignup />
    </div>
    <div className='bg-purple-500 rounded-full absolute bottom-10 sm:right-52 '>
      <button className="h-12 w-28 font-bold">
        <Link to="/data">Go to Data</Link>
      </button>
    </div>
    </>

  );
};

export default SignupScreen;
