import React from "react";

const EmptyDashboard = (props) => {
  const { createBook } = props;
  return (
    <>
      <button onClick={createBook}>Create New Book</button>
    </>
  );
};

export default EmptyDashboard;
