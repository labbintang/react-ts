import { proxy } from 'valtio';

export const navigationIconProxy = proxy<{ [key: string]: any }>(
  import.meta.globEager(
    '../assets/images/navigation/*.(svg|SVG|jpg|JPG|jpeg|JPEG|PNG|png|gif|GIF)'
  )
);
