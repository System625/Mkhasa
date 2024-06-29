import { createContext, useState } from "react";
import { prefix } from "../utils/lib";
export const AuthContext = createContext();

export const Auth = ({ children }) => {
  const username = "Mkhasa User";
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem(prefix("user")))
  );

  const getAccessToken = () => user?.token;
  const getUserId = () => user?.id;
  const getUserEmail = () => user?.email;
  const getUserAddress = () => user?.address;
  const getUserPhone = () => user?.phoneNumber;

  return (
    <AuthContext.Provider
      value={{
        user,
        getAccessToken,
        setUser,
        getUserId,
        getUserEmail,
        username,
        getUserAddress,
        getUserPhone
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
