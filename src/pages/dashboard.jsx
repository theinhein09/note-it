import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/loading";
import useBoolean from "../hooks/useBoolean";
import { getBooks, getUser } from "../utils/fakeAPI";
import { groupBy } from "lodash";
import SidebarContainer from "../containers/sidebar-container";

const Dashboard = () => {
  const userId = useParams();
  const [loading, { on: startLoading, off: finishLoading }] = useBoolean(true);
  const [sidebar, { on: openSidebar, off: closeSidebar }] = useBoolean(false);

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

  const renderBooks = () => {
    let books = [];
    for (let category in categories) {
      books.push(
        <Fragment key={category}>
          <p>{category}</p>
          {categories[category].map((book) => (
            <Fragment key={book.id}>
              <p onClick={openSidebar}>{book.title}</p>
            </Fragment>
          ))}
        </Fragment>
      );
    }
    return books;
  };

  return (
    <>
      <>{loading ? <Loading /> : user.displayName}</>
      <>{loading ? <Loading /> : <>{renderBooks()}</>}</>
      <>{sidebar && <SidebarContainer closeSidebar={closeSidebar} />}</>
    </>
  );
};

export default Dashboard;
