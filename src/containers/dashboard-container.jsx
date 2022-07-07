import { groupBy } from "lodash";
import React, { Fragment, useEffect, useMemo, useState } from "react";
import { FaEdit } from "react-icons/fa";
import Dashboard from "../components/dashboard";
import { useSidebarContextUpdater } from "../contexts/sidebar-context";
import useBoolean from "../hooks/useBoolean";
import { getBooks } from "../utils/mockAPI";

const DashboardContainer = (props) => {
  const { setSelectedBook, userId } = props;
  const { openSidebar } = useSidebarContextUpdater();
  const [loading, { on: startLoading, off: finishLoading }] = useBoolean(true);

  const [categories, setCatagories] = useState(null);

  const categoriesMemo = useMemo(
    () => ({ categories, setCatagories }),
    [categories]
  );

  useEffect(() => {
    (async () => {
      startLoading();
      const books = await getBooks(userId);
      const groupByCategory = groupBy(books, "category");
      setCatagories(groupByCategory);
      finishLoading();
    })();
  }, [userId, startLoading, finishLoading]);

  const renderBooks = () => {
    const handleCLick = (event, book) => {
      if (event.currentTarget === event.target) {
        setSelectedBook(book);
        openSidebar();
      }
    };

    let books = [];
    for (let category in categoriesMemo.categories) {
      books.push(
        <Fragment key={category}>
          <h3>{category}</h3>
          {categoriesMemo.categories[category].map((book) => (
            <Fragment key={book.id}>
              <h4 onClick={(event) => handleCLick(event, book)}>
                {book.title}
                <button onClick={() => console.log("EDIT")}>
                  <FaEdit />
                </button>
              </h4>
            </Fragment>
          ))}
        </Fragment>
      );
    }
    return books;
  };

  return <Dashboard {...props} loading={loading} renderBooks={renderBooks} />;
};

export default DashboardContainer;
