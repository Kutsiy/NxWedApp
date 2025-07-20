"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import { type AboutStore, createAboutStore } from "./about-store";

export type AboutStoreApi = ReturnType<typeof createAboutStore>;

export const AboutStoreContext = createContext<AboutStoreApi | undefined>(
  undefined
);

export interface AboutStoreProviderProps {
  children: ReactNode;
}

export const AboutStoreProvider = ({ children }: AboutStoreProviderProps) => {
  const storeRef = useRef<AboutStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createAboutStore();
  }

  return (
    <AboutStoreContext.Provider value={storeRef.current}>
      {children}
    </AboutStoreContext.Provider>
  );
};

export const useAboutStore = <T,>(selector: (store: AboutStore) => T) => {
  const headerStoreContext = useContext(AboutStoreContext);
  if (!headerStoreContext) {
    throw new Error(`useHeaderStore must be used within StoreProvider`);
  }
  return useStore(headerStoreContext, selector);
};
