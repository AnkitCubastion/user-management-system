import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const updateUserList = (newUsers) => {
    setUsers(newUsers);
  };

  return (
    <UserContext.Provider value={{ users, updateUserList }}>
      {children}
    </UserContext.Provider>
  );
};
