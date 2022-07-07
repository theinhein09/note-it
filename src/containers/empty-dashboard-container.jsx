import React from "react";
import EmptyDashboard from "../components/empty-dashboard";

const EmptyDashboardContainer = (props) => {
  const createBook = () => {};
  return <EmptyDashboard {...props} createBook={createBook} />;
};

export default EmptyDashboardContainer;
