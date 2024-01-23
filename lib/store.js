import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSiteInfo = create(
  persist(
    (set) => ({
      theme: "#FE6D3B",
      username: null,
      logo: null,
      setTheme: (theme) => set({ theme }),
      setUsername: (username) => set({ username }),
      setLogo: (logo) => set({ logo }),
    }),
    {
      name: "theme", // name of the item in the storage (must be unique)
    },
    {
      name: "username",
    },
    {
      name: "logo",
    }
  )
);
