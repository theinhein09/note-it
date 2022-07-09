import Loading from "../components/loading";
import Authenticator from "../firebase/authenticator";
import useBoolean from "../hooks/useBoolean";
const {
  createContext,
  useState,
  useMemo,
  useContext,
  useEffect,
} = require("react");

const UserContextState = createContext();
const UserContextUpdater = createContext();

const UserContextProvider = (props) => {
  const { children } = props;

  const [user, setUser] = useState(null);

  const context = useMemo(() => ({ user, setUser }), [user]);

  const [loading, { on: startLoading, off: finishLoading }] = useBoolean(true);

  useEffect(() => {
    startLoading();
    Authenticator._onAuthStateChanged(user, setUser, finishLoading);
  }, [finishLoading, user, setUser, startLoading]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <UserContextState.Provider value={context.user}>
          <UserContextUpdater.Provider value={context.setUser}>
            {children}
          </UserContextUpdater.Provider>
        </UserContextState.Provider>
      )}
    </>
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
