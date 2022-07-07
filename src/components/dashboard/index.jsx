import React, { Fragment } from "react";
import ButtonContainer from "../../containers/button-container";
import EmptyDashboardContainer from "../../containers/empty-dashboard-container";
import Loading from "../loading";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import BookCover from "../book-cover";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Dashboard = (props) => {
  const { loading, openBookPreview, categoriesMemo } = props;

  const renderBooks = () => {
    let books = [];
    for (let category in categoriesMemo.categories) {
      books.push(
        <div role="presentation" className="mx-5 my-2" key={category}>
          <div role="presentation" className="flex items-center gap-2">
            <h3 className="font-display text-xl">{category}</h3>
            <div role="presentation" className="flex">
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
            </div>
          </div>
          <div
            role="presentation"
            className="flex w-[280px] overflow-hidden border border-black py-2 px-4"
          >
            {categoriesMemo.categories[category].map((book, index) => (
              <>
                {index !== 0 && (
                  <div className="mr-4 ml-2 h-12 w-1 flex-none self-center bg-black" />
                )}
                <article key={book.id}>
                  <div role="presentation" className="flex">
                    <BookCover onClick={openBookPreview(book)} />
                    <div role="presentation">
                      <ButtonContainer
                        onClick={openBookPreview(book)}
                        icon={<MdOutlineRemoveRedEye />}
                        category="icon-only"
                        title="Open Book in Preview"
                      />
                      <ButtonContainer
                        onClick={() => console.log("EDIT Book Title")}
                        icon={<FaEdit />}
                        category="icon-only"
                        title="Edit Book Title"
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
              </>
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

export default Dashboard;
