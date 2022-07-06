const { createContext, useState, useMemo, useContext } = require("react");

const UserContextState = createContext();
const UserContextUpdater = createContext();

const UserContextProvider = (props) => {
  const { children } = props;

  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));
  console.log(user);
  const context = useMemo(() => ({ user, setUser }), [user]);

  return (
    <UserContextState.Provider value={context.user}>
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
