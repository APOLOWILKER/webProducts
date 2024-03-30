import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DataDisplayScreen from '../Pages/DataDisplayScreen';
import LoginScreen from '../Pages/LoginScreen';
import SignupScreen from '../Pages/SignupScreen';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/data" element={<DataDisplayScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
