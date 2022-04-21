import { defineConfig } from 'vite';
import { ViteAliases as aliases } from 'vite-aliases';
import { minifyHtml, injectHtml } from 'vite-plugin-html';
import react from '@vitejs/plugin-react';
import svg from 'vite-plugin-react-svg';
import _ from 'lodash';
import pkg from './package.json';
import md, { Mode } from 'vite-plugin-markdown';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    aliases({
      useTypescript: true,
      useRelativePaths: true,
      useConfig: true,
    }),
    minifyHtml(),
    injectHtml({
      data: {
        title: `${_.startCase(pkg.displayName)} - ${pkg.version}`,
      },
    }),
    svg(),
    md({
      mode: [Mode.REACT],
    }),
  ],
});
