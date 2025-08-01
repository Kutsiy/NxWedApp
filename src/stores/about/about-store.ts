import { devtools } from "zustand/middleware";
import { createStore } from "zustand/vanilla";

export type AboutState = {
  aboutNav: { name: string; href: string }[];
};

export type AboutActions = {
  addToAboutNav: (value: string, href: string) => void;
  deleteFromAboutNav: (value: string) => void;
  cleanAboutNav: () => void;
};

export type AboutStore = AboutState & AboutActions;

export const defaultAboutStore: AboutState = {
  aboutNav: [],
};

export const createAboutStore = (initState: AboutState = defaultAboutStore) =>
  createStore<AboutStore>()(
    devtools((set) => ({
      ...initState,
      addToAboutNav: (name: string, href: string): void =>
        set((state: AboutStore) => {
          state.aboutNav = [
            ...state.aboutNav.filter((val) => val.name !== name),
          ];
          return { aboutNav: [...state.aboutNav, { name, href }] };
        }),
      deleteFromAboutNav: (name) =>
        set((state) => ({
          aboutNav: [...state.aboutNav.filter((val) => val.name !== name)],
        })),
      cleanAboutNav: () => set(() => ({ aboutNav: [] })),
    }))
  );
