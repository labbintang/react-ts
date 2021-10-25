import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Login, Register } from './pages';
import App from './App';
import '@assets/styles/body.css';

const logged = true;

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
