// darkmode store
// TODO: Add a dark mode store
import {create} from "zustand";
import {DarkModeState} from "../types/darkmodeTypes";

const useDarkModeStore = create<DarkModeState>((set) => ({
    darkMode: false,
    toggleDarkMode: () => set((state) => ({darkMode: !state.darkMode})),
}))
/**
 * return { darkMode: boolean, toggleDarkMode: () => void }
 *
 **/
export {useDarkModeStore}