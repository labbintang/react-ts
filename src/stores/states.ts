import { proxy } from 'valtio';
import { atomWithProxy } from 'jotai/valtio';
import { subscribeKey } from 'valtio/utils';

const isLightProxy = proxy({
  state: localStorage.getItem('theme') === 'true' ?? true,
});

const isLightAtom = atomWithProxy(isLightProxy);

subscribeKey(isLightProxy, 'state', (key) =>
  localStorage.setItem('theme', key.toString())
);

export { isLightAtom, isLightProxy };
