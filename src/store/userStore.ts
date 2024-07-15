import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import axios from "../api/axiosConfig";

interface User {
  id: string;
  username: number;
  email: string;
  password: string;
}

interface userState {
  users: User[] | null;
  setUsers: (users: User[]) => void;
  deleteUser: (id: string) => void;
  updateUser: (user: User) => void;
  createUser: (user: User) => void;
}

const useAuthStore = create<userState>()(
  devtools(persist((set) => ({}), { name: "userStore" }))
);

export default useAuthStore;
