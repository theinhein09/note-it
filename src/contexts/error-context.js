import { createContext, useContext, useMemo, useState } from "react";

const ErrorContextState = createContext();
const ErrorContextUpdater = createContext();

const ErrorContextProvider = (props) => {
  const { children } = props;
  const [error, setError] = useState(null);
  const context = useMemo(() => ({ error, setError }), [error]);

  return (
    <ErrorContextState.Provider value={context.error}>
      <ErrorContextUpdater.Provider value={context.setError}>
        {children}
      </ErrorContextUpdater.Provider>
    </ErrorContextState.Provider>
  );
};

const useErrorContextState = () => {
  const context = useContext(ErrorContextState);

  if (context === undefined) {
    throw new Error("useErrorContextState was used outside of its Provider");
  }

  return context;
};

const useErrorContextUpdater = () => {
  const context = useContext(ErrorContextUpdater);
  if (context === undefined) {
    throw new Error("useErrorContextUpdater was used outside of its Provider");
  }

  return context;
};

export { ErrorContextProvider, useErrorContextState, useErrorContextUpdater };
