import { createContext, useState } from "react";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  async function login(email: string, password: string) {}

  async function register(email: string, password: string) {}

  async function logOut() {}

  return (
    <UserContext.Provider value={{ login, register, logOut, user }}>
      {children}
    </UserContext.Provider>
  );
}
