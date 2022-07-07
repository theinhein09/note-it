import { groupBy } from "lodash";
import React, { Fragment, useEffect, useMemo, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Dashboard from "../components/dashboard";
import { useSidebarContextUpdater } from "../contexts/sidebar-context";
import useBoolean from "../hooks/useBoolean";
import { getBooks } from "../utils/mockAPI";
import ButtonContainer from "./button-container";

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
    const openBookPreview = (book) => (event) => {
      if (event.currentTarget === event.target) {
        setSelectedBook(book);
        openSidebar();
      }
    };

    let books = [];
    for (let category in categoriesMemo.categories) {
      books.push(
        <Fragment key={category}>
          <h3>
            {category}
            <ButtonContainer
              onClick={() => console.log("EDIT Book Category")}
              icon={<FaEdit />}
            />
            <ButtonContainer
              onClick={() => console.log("DELETE Book Category")}
              icon={<RiDeleteBin6Line />}
            />
          </h3>
          {categoriesMemo.categories[category].map((book) => (
            <Fragment key={book.id}>
              <h4 onClick={openBookPreview(book)}>
                {book.title}
                <ButtonContainer
                  onClick={() => console.log("EDIT Book Title")}
                  icon={<FaEdit />}
                />
                <ButtonContainer
                  onClick={() => console.log("DELETE Book Title")}
                  icon={<RiDeleteBin6Line />}
                />
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
