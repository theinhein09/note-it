import React, { useState } from "react";
import { useParams } from "react-router-dom";
import UserContainer from "../containers/user-container";
import LayoutContainer from "../containers/layout-container";
import DashboardContainer from "../containers/dashboard-container";

const Home = () => {
  const { userId } = useParams();
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <LayoutContainer selectedBook={selectedBook}>
      <UserContainer />
      <DashboardContainer userId={userId} setSelectedBook={setSelectedBook} />
    </LayoutContainer>
  );
};

export default Home;
