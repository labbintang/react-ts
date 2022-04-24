import * as React from 'react';
import { subscribeKey } from 'valtio/utils';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { TopMenuBar } from '@components';
import { Routes } from './Routes';
import { isLightProxy } from '@stores/states';
import { themeLoader, container } from './libs';
import '@assets/styles/body.css';

const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <TopMenuBar />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>
);

themeLoader(isLightProxy.state);

subscribeKey(isLightProxy, 'state', () => {
  themeLoader(isLightProxy.state);
});
