import { devtools } from "zustand/middleware";
import { createStore } from "zustand/vanilla";

export type AboutState = {
  professionalInfo: string[];
  personalInfo: string[];
};

export type AboutActions = {
  addToProfessional: (value: string) => void;
  addToPersonal: (value: string) => void;
  deleteFromProfessional: (value: string) => void;
  deleteFromPersonal: (value: string) => void;
  cleanProfessional: () => void;
  cleanPersonal: () => void;
};

export type AboutStore = AboutState & AboutActions;

export const defaultAboutStore: AboutState = {
  professionalInfo: [],
  personalInfo: [],
};

export const createAboutStore = (initState: AboutState = defaultAboutStore) =>
  createStore<AboutStore>()(
    devtools((set) => ({
      ...initState,
      addToProfessional: (value) =>
        set((state) => ({
          professionalInfo: [...state.professionalInfo, value],
        })),
      addToPersonal: (value) =>
        set((state) => ({ personalInfo: [...state.personalInfo, value] })),
      deleteFromProfessional: (value) =>
        set((state) => ({
          professionalInfo: [
            ...state.professionalInfo.filter((val) => val !== value),
          ],
        })),
      deleteFromPersonal: (value) =>
        set((state) => ({
          personalInfo: [...state.personalInfo.filter((val) => val !== value)],
        })),
      cleanProfessional: () => set(() => ({ professionalInfo: [] })),
      cleanPersonal: () => set(() => ({ personalInfo: [] })),
    }))
  );
