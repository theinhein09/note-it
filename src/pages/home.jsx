import React, { useState } from "react";
import LayoutContainer from "../containers/layout-container";
import DashboardContainer from "../containers/dashboard-container";
import { useUserContextState } from "../contexts/user-context";

const Home = () => {
  const { user } = useUserContextState();
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <LayoutContainer selectedBook={selectedBook}>
      <h2 className="ml-8 flex h-8 max-h-8 grow items-center bg-black px-1 font-display text-white">
        {user.displayName}
      </h2>
      <DashboardContainer setSelectedBook={setSelectedBook} />
    </LayoutContainer>
  );
};

export default Home;
