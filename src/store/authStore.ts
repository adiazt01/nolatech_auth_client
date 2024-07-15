import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import axios from "../api/axiosConfig"

interface AuthState {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  userInformation: {
    username: string;
    email: string;
  } | null;
  setUserInformation: (userInformation: {
    username: string;
    email: string;
  }) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        isAuthenticated: false,
        userInformation: null,
        setIsAuthenticated: (isAuthenticated) =>
          set((state) => ({ ...state, isAuthenticated })),
        logout: async () => {
          await axios("/auth/logout");
          set((state) => ({
            ...state,
            isAuthenticated: false,
            userInformation: null,
          }))
        }, 
        setUserInformation: (userInformation) =>
          set((state) => ({ ...state, userInformation })),
      }),
      { name: "bearStore" }
    )
  )
);

export default useAuthStore;
