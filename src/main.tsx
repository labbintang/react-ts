import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Login, Register } from './layouts';

const logged = false;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={logged ? <App /> : <Login />} />
        <Route caseSensitive path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
