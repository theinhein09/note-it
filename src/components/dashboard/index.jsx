import React, { Fragment } from "react";
import ButtonContainer from "../../containers/button-container";
import EmptyDashboardContainer from "../../containers/empty-dashboard-container";
import Loading from "../loading";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import BookCover from "../book-cover";

const Dashboard = (props) => {
  const { loading, openBookPreview, categoriesMemo } = props;

  const renderBooks = () => {
    let books = [];
    for (let category in categoriesMemo.categories) {
      books.push(
        <Fragment key={category}>
          <h3>
            {category}
            <ButtonContainer
              onClick={() => console.log("EDIT Book Category")}
              icon={<FaEdit />}
              category="icon-only"
            />
            <ButtonContainer
              onClick={() => console.log("DELETE Book Category")}
              icon={<RiDeleteBin6Line />}
              category="icon-only"
            />
          </h3>
          {categoriesMemo.categories[category].map((book) => (
            <Fragment key={book.id}>
              <BookCover onClick={openBookPreview(book)} />
              <h4 className="font-display">{book.title}</h4>
              <div role="presentation" className="flex">
                <ButtonContainer
                  onClick={() => console.log("EDIT Book Title")}
                  icon={<FaEdit />}
                  category="icon-only"
                />
                <ButtonContainer
                  onClick={() => console.log("DELETE Book Title")}
                  icon={<RiDeleteBin6Line />}
                  category="icon-only"
                />
              </div>
            </Fragment>
          ))}
        </Fragment>
      );
    }
    return books;
  };

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
