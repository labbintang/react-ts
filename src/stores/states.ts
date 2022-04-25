import { atom } from 'jotai';
import { proxy } from 'valtio';
import { atomWithProxy } from 'jotai/valtio';
import { subscribeKey } from 'valtio/utils';

// Persistent Dark Mode State using Local Storage
const isLightProxy = proxy({
  state: localStorage.getItem('theme') === 'true' ?? true,
});

const isLightAtom = atomWithProxy(isLightProxy);

subscribeKey(isLightProxy, 'state', (key) =>
  localStorage.setItem('theme', key.toString())
);

// Sidebar width state
const sideBarExtendedAtom = atom(false);

export { isLightAtom, isLightProxy, sideBarExtendedAtom };
