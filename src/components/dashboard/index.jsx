import React, { Fragment } from "react";
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
import ConfirmationDialog from "../dialog/confirmatiion-dialog";

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
            className="w-[280px] border border-black py-2 px-4"
          >
            <Carousel>
              {categoriesMemo.categories[category].map((book) => (
                <div className="mr-4" key={book.id}>
                  <div className="flex">
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
                </div>
              ))}
            </Carousel>
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

      {dialog && (
        <ConfirmationDialog
          onConfirm={onConfirm}
          closeDialog={closeDialog}
          message="Are you sure you want to delete this book?"
        />
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
