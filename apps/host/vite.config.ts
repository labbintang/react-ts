import { defineConfig } from 'vite';
import { ViteAliases as aliases } from 'vite-aliases';
import { createHtmlPlugin } from 'vite-plugin-html';
import react from '@vitejs/plugin-react';
import svg from 'vite-plugin-svgr';
import _ from 'lodash';
import pkg from './package.json';
import md, { Mode } from 'vite-plugin-markdown';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    aliases({
      useTypescript: true,
      useConfig: true,
      useIndexes: true,
    }),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: `${_.startCase(pkg.displayName)} - ${pkg.version}`,
        },
      },
    }),
    svg(),
    md({
      mode: [Mode.REACT],
    }),
  ],
});
