"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import { type HeaderStore, createHeaderStore } from "./header-store";

export type HeaderStoreApi = ReturnType<typeof createHeaderStore>;

export const HeaderStoreContext = createContext<HeaderStoreApi | undefined>(
  undefined
);

export interface HeaderStoreProviderProps {
  children: ReactNode;
}

export const HeaderStoreProvider = ({ children }: HeaderStoreProviderProps) => {
  const storeRef = useRef<HeaderStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createHeaderStore();
  }

  return (
    <HeaderStoreContext.Provider value={storeRef.current}>
      {children}
    </HeaderStoreContext.Provider>
  );
};

export const useHeaderStore = <T,>(selector: (store: HeaderStore) => T) => {
  const headerStoreContext = useContext(HeaderStoreContext);
  if (!headerStoreContext) {
    throw new Error(`useHeaderStore must be used within StoreProvider`);
  }
  return useStore(headerStoreContext, selector);
};
