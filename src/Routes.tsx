import * as React from 'react';
import { Route, Routes as RouteList } from 'react-router-dom';
import { Login, Register } from './pages';
import App from './App';

const logged = true;

const Routes = () => {
  return (
    <RouteList>
      <Route path="/" element={logged ? <App /> : <Login />} />
      <Route caseSensitive path="/register" element={<Register />} />
    </RouteList>
  );
};

export { Routes };
