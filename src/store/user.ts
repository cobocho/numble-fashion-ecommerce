import { create } from 'zustand';
import { User } from '../types/user';

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

const userStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user: User) => {
    set(() => ({ user: user }));
  },
  clearUser: () => {
    set(() => ({ user: null }));
  },
}));

export default userStore;
