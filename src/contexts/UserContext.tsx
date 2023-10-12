import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { IUser } from "../hooks/useLogin";

type IUserContext = {
  user: IUser | undefined;
  setUser: Dispatch<SetStateAction<IUser | undefined>>;
};

export const UserContext = createContext<IUserContext>({
  user: undefined,
  setUser: () => {},
});

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<IUser>();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
