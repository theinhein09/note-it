import React, { StrictMode, useEffect, useState } from "react";
import Layout from "../components/layout";
import DashboardContainer from "../containers/dashboard-container";
import { useUserContextState } from "../contexts/user-context";
import PrivateRoute from "../components/private-route";
import { useSidebarContextUpdater } from "../contexts/sidebar-context";

const Home = () => {
  const { user } = useUserContextState();
  const [selectedBook, setSelectedBook] = useState(null);
  const { closeSidebar } = useSidebarContextUpdater();

  useEffect(() => {
    closeSidebar();
  }, [closeSidebar]);

  return (
    <StrictMode>
      <PrivateRoute>
        <Layout selectedBook={selectedBook} setSelectedBook={setSelectedBook}>
          {user && (
            <h2 className="ml-8 flex h-8 max-h-8 grow items-center bg-black px-1 font-display text-white shadow-sm shadow-black">
              {user.displayName}
            </h2>
          )}
          <DashboardContainer setSelectedBook={setSelectedBook} />
        </Layout>
      </PrivateRoute>
    </StrictMode>
  );
};

export default Home;
