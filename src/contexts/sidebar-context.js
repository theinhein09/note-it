import { createContext, useContext } from "react";
import useBoolean from "../hooks/useBoolean";

const SidebarContextState = createContext();
const SidebarContextUpdater = createContext();

const SidebarContextProvider = (props) => {
  const { children } = props;
  const [
    sidebar,
    { toggle: toggleSidebar, on: openSidebar, off: closeSidebar },
  ] = useBoolean();

  return (
    <SidebarContextState.Provider value={sidebar}>
      <SidebarContextUpdater.Provider
        value={{ toggleSidebar, openSidebar, closeSidebar }}
      >
        {children}
      </SidebarContextUpdater.Provider>
    </SidebarContextState.Provider>
  );
};

const useSidebarContextState = () => {
  const context = useContext(SidebarContextState);

  if (context === undefined)
    throw new Error(
      "useSidebarContextState was called outside of its Provider."
    );

  return context;
};

const useSidebarContextUpdater = () => {
  const context = useContext(SidebarContextUpdater);

  if (context === undefined)
    throw new Error(
      "useSidebarContextUpdater was called outside of its Provider."
    );

  return context;
};

export {
  useSidebarContextState,
  useSidebarContextUpdater,
  SidebarContextProvider,
};
