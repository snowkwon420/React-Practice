import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const accessTokenAtom = atom({
  key: 'accessToken',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const csrfTokenAtom = atom({
  key: 'csrfToken',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const userNameAtom = atom({
  key: 'userName',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const isLoginAtom = atom({
  key: 'isLogin',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
