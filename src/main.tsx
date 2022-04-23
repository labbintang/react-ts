import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { TopMenuBar } from '@components';
import { Routes } from './Routes';
import '@assets/styles/body.css';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <TopMenuBar />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>
);
