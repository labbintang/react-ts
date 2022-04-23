import { atom } from 'jotai';

export const imagesAtom = atom<{ [key: string]: any }>(
  import.meta.globEager(
    '../assets/images/**/*.(svg|SVG|jpg|JPG|jpeg|JPEG|PNG|png|gif|GIF)'
  )
);
