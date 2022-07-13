import React from "react";
import PropTypes from "prop-types";
import ButtonContainer from "../../containers/button-container";
import EmptyDashboardContainer from "../../containers/empty-dashboard-container";
import Loading from "../loading";
import { RiDeleteBin6Line } from "react-icons/ri";
import BookCover from "../book-cover";
import { FaRegEye } from "react-icons/fa";
import ModalContainer from "../../containers/modal-container";
import DialogContainer from "../../containers/dialog-container";
import Carousel from "../carousel";

const Dashboard = (props) => {
  const {
    loading,
    openBookPreview,
    categoriesMemo,
    dialog,
    closeDialog,
    onDelete,
    onConfirm,
  } = props;

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
                      onClick={() => onDelete(book.id)}
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
  const arr = Array.from({ length: 20 }, (_, i) => i + 1);
  return (
    <>
      <Carousel>
        {arr.map((ele) => (
          <div
            key={ele}
            className="inline-block h-52 w-32 border border-black bg-orange-300"
          >
            {ele}
          </div>
        ))}
      </Carousel>
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
      {dialog && (
        <ModalContainer>
          <DialogContainer hideButton={true}>
            <div className="bg-white font-display">
              <div className="bg-black p-1 text-white">Confirm</div>
              <div className="flex h-20 items-center justify-center p-2">
                Are you sure you want to delete this book?
              </div>
              <div className="flex justify-between p-1">
                <ButtonContainer label="Confirm" onClick={onConfirm} />
                <ButtonContainer label="Cancel" onClick={closeDialog} />
              </div>
            </div>
          </DialogContainer>
        </ModalContainer>
      )}
    </>
  );
};

Dashboard.propTypes = {
  loading: PropTypes.bool,
  openBookPreview: PropTypes.func,
  categoriesMemo: PropTypes.object,
  dialog: PropTypes.bool,
  closeDialog: PropTypes.func,
  onDelete: PropTypes.func,
  onConfirm: PropTypes.func,
};

export default Dashboard;
