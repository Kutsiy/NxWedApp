import { devtools } from "zustand/middleware";
import { createStore } from "zustand/vanilla";

export type HeaderState = {
  isOpen: boolean;
};

export type HeaderActions = {
  closeMenu: () => void;
  openMenu: () => void;
};

export type HeaderStore = HeaderState & HeaderActions;

export const defaultHeaderStore: HeaderState = {
  isOpen: false,
};

export const createHeaderStore = (
  initState: HeaderState = defaultHeaderStore
) =>
  createStore<HeaderStore>()(
    devtools((set) => ({
      ...initState,
      closeMenu: () => set(() => ({ isOpen: false })),
      openMenu: () => set(() => ({ isOpen: true })),
    }))
  );
