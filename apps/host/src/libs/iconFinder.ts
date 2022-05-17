import { navigationIconProxy } from '@/stores/assets';

const iconFinder = (icon: string) => {
  const iconKey = Object.keys(navigationIconProxy).filter((val) =>
    val.includes(icon)
  )[0];
  return navigationIconProxy[iconKey].default;
};

export { iconFinder };
