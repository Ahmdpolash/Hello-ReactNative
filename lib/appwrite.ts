import { Client, Account, ID, Avatars } from "react-native-appwrite";

const client = new Client()
  .setProject("6850538c002ee664308f")
  .setPlatform("dev.polash.firstApp");

export const account = new Account(client);
export const avatars = new Avatars(client);
