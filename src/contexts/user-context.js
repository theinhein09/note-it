import Authenticator from "../firebase/authenticator";
import useBoolean from "../hooks/useBoolean";
import { createContext, useState, useMemo, useContext, useEffect } from "react";

const UserContextState = createContext();
const UserContextUpdater = createContext();

const UserContextProvider = (props) => {
  const { children } = props;

  const [user, setUser] = useState(null);
  const [loading, { on, off }] = useBoolean(true);

  const context = useMemo(() => ({ user, loading, setUser }), [user, loading]);

  useEffect(() => {
    Authenticator._onAuthStateChanged(user, setUser, on, off);
  }, [user, setUser, on, off]);

  return (
    <UserContextState.Provider
      value={{ user: context.user, loading: context.loading }}
    >
      <UserContextUpdater.Provider value={context.setUser}>
        {children}
      </UserContextUpdater.Provider>
    </UserContextState.Provider>
  );
};

const useUserContextState = () => {
  const context = useContext(UserContextState);

  if (context === undefined) {
    throw new Error("useUserContextState was used outside of its Provider");
  }
  return context;
};

const useUserContextUpdater = () => {
  const context = useContext(UserContextUpdater);

  if (context === undefined) {
    throw new Error("useUserContextUpdater was used outside of its Provider");
  }
  return context;
};

export { UserContextProvider, useUserContextState, useUserContextUpdater };
