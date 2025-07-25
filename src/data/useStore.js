import { create } from 'zustand';

const useStore = create((set) => ({
    page: 0,
    theme: 'dark',
    themeChange: (currentTheme) => set({ theme: currentTheme === 'dark' ? 'light' : 'dark' }),
    setTheme: (value) => set({ theme: value }),
    setPage: (value) => set({ page: value }),
}));

export default useStore;
