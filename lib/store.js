import { create } from "zustand";
import { persist } from "zustand/middleware";

// export const useSiteInfo = create((set) => ({
//   theme: "#FE6D3B",
//   setTheme: (theme) => set({ theme }),
// }));

export const useSiteInfo = create(
  persist(
    (set) => ({
      theme: "#FE6D3B",
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "theme", // name of the item in the storage (must be unique)
      // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
