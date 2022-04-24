import { container } from './const';
import theme from '@/assets/styles/theme.module.css';

const themeLoader = (state: boolean) => {
  if (state) container!.className = theme.light;
  else container!.className = theme.dark;
};

export { themeLoader };
