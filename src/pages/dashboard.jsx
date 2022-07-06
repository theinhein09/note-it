import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/loading";
import useBoolean from "../hooks/useBoolean";
import { getBooks, getUser } from "../utils/fakeAPI";
import { groupBy } from "lodash";

const Dashboard = () => {
  const userId = useParams();
  const [loading, { on: startLoading, off: finishLoading }] = useBoolean(true);
  const [user, setUser] = useState(null);
  const [categories, setCatagories] = useState({});

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
      const groupByCatagory = groupBy(books, "category");
      setCatagories(groupByCatagory);
      finishLoading();
    })();
  }, [userId, startLoading, finishLoading]);

  const renderCategories = () => {
    let books = [];
    for (let category in categories) {
      books.push(
        <Fragment key={category}>
          <>{category}</>
          {categories[category].map((book) => (
            <Fragment key={book.id}>{book.title}</Fragment>
          ))}
        </Fragment>
      );
    }
    return books;
  };

  return (
    <>
      <>{loading ? <Loading /> : user.displayName}</>
      <>{loading ? <Loading /> : <>{renderCategories()}</>}</>
    </>
  );
};

export default Dashboard;
