import { createContext, useState } from "react";
import { account } from "../lib/appwrite";
import { ID } from "react-native-appwrite";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  async function login(email: string, password: string) {
    try {
      await account.createEmailPasswordSession(email, password);
      const response = await account.get();
      setUser(response);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function register(email: string, password: string) {
    try {
      await account.create(ID.unique(), email, password);
      await login(email, password);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function logOut() {}

  return (
    <UserContext.Provider value={{ login, register, logOut, user }}>
      {children}
    </UserContext.Provider>
  );
}
