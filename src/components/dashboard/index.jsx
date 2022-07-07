import React from "react";
import EmptyDashboardContainer from "../../containers/empty-dashboard-container";
import Loading from "../loading";

const Dashboard = (props) => {
  const { renderBooks, loading } = props;
  const books = renderBooks();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>{books.length === 0 ? <EmptyDashboardContainer /> : <>{books}</>}</>
      )}
    </>
  );
};

export default Dashboard;
