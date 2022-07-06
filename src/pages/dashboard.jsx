import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/loading";
import useBoolean from "../hooks/useBoolean";
import { getBooks } from "../utils/fakeAPI";
import { groupBy } from "lodash";
import SidebarContainer from "../containers/sidebar-container";
import BookPreviewContainer from "../containers/book-preview-container";
import { useUserContextState } from "../contexts/user-context";

const Dashboard = () => {
  const { userId } = useParams();
  const [loading, { on: startLoading, off: finishLoading }] = useBoolean(true);
  const [sidebar, { on: openSidebar, off: closeSidebar }] = useBoolean(false);
  const [categories, setCatagories] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const user = useUserContextState();

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
    const handleCLick = (book) => {
      setSelectedBook(book);
      openSidebar();
    };

    let books = [];
    for (let category in categories) {
      books.push(
        <Fragment key={category}>
          <h3>{category}</h3>
          {categories[category].map((book) => (
            <Fragment key={book.id}>
              <h4 onClick={() => handleCLick(book)}>{book.title}</h4>
            </Fragment>
          ))}
        </Fragment>
      );
    }
    return books;
  };

  return (
    <>
      <h2>{user.displayName}</h2>
      <>{loading ? <Loading /> : <>{renderBooks()}</>}</>
      <>
        {sidebar && (
          <SidebarContainer closeSidebar={closeSidebar}>
            <BookPreviewContainer selectedBook={selectedBook} />
          </SidebarContainer>
        )}
      </>
    </>
  );
};

export default Dashboard;
