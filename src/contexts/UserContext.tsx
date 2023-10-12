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
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

export const UserContext = createContext<IUserContext>({
  user: undefined,
  setUser: () => {},
  loading: false,
  setLoading: () => {},
});

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<IUser>();
  const [loading, setLoading] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};
