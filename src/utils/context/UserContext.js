import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "ABC XYZ",
    email: "abcxyz@gmail.com",
  },
});

export default UserContext;
