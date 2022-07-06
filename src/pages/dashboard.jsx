import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/loading";
import useBoolean from "../hooks/useBoolean";
import { getBooks, getUser } from "../utils/fakeAPI";

const Dashboard = () => {
  const userId = useParams();
  const [loading, { on: startLoading, off: finishLoading }] = useBoolean(true);
  const [user, setUser] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    (async () => {
      startLoading();
      const user = await getUser(userId);
      setUser(user);
      finishLoading();
    })();
  }, [userId, startLoading, finishLoading]);

  useEffect(() => {
    (async () => {
      startLoading();
      const books = await getBooks(userId);
      setBooks(books);
      finishLoading();
    })();
  }, [userId, startLoading, finishLoading]);

  return (
    <>
      <>{loading ? <Loading /> : user.displayName}</>
      <>
        {loading ? (
          <Loading />
        ) : (
          books.map((book) => <Fragment key={book.id}>{book.title}</Fragment>)
        )}
      </>
    </>
  );
};

export default Dashboard;
