import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

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
}

const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        isAuthenticated: false,
        setIsAuthenticated: (isAuthenticated) =>
          set((state) => ({ ...state, isAuthenticated })),
        userInformation: null,
        setUserInformation: (userInformation) =>
          set((state) => ({ ...state, userInformation })),
      }),
      { name: "bearStore" }
    )
  )
);

export default useAuthStore;
