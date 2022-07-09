import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ButtonContainer from "../../containers/button-container";
import EmptyDashboardContainer from "../../containers/empty-dashboard-container";
import Loading from "../loading";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import BookCover from "../book-cover";
import { FaRegEye } from "react-icons/fa";

const Dashboard = (props) => {
  const { loading, openBookPreview, categoriesMemo } = props;

  const renderBooks = () => {
    let books = [];
    for (let category in categoriesMemo.categories) {
      books.push(
        <div role="presentation" className="mx-5 my-2" key={category}>
          <h3 className="font-display text-xl">{category}</h3>
          <div
            role="presentation"
            className="flex w-[280px] divide-x-2 overflow-hidden border border-black py-2 px-4"
          >
            {categoriesMemo.categories[category].map((book) => (
              <article key={book.id} className="px-4">
                <div role="presentation" className="flex">
                  <BookCover onClick={openBookPreview(book)} />
                  <div role="presentation">
                    <ButtonContainer
                      onClick={openBookPreview(book)}
                      icon={<FaRegEye />}
                      category="icon-only"
                      title="Open Book in Preview"
                    />
                    <ButtonContainer
                      onClick={() => console.log("DELETE Book Title")}
                      icon={<RiDeleteBin6Line />}
                      category="icon-only"
                      title="Delete Book"
                    />
                  </div>
                </div>
                <h4 className="font-display">{book.title}</h4>
              </article>
            ))}
          </div>
        </div>
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
        <>
          {books.length === 0 ? (
            <EmptyDashboardContainer />
          ) : (
            <section className="flex flex-wrap">{books}</section>
          )}
        </>
      )}
    </>
  );
};

Dashboard.propTypes = {
  loading: PropTypes.bool,
  openBookPreview: PropTypes.func,
  categoriesMemo: PropTypes.object,
};

export default Dashboard;
