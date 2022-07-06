import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/loading";
import useBoolean from "../hooks/useBoolean";
import { getBook } from "../utils/fakeAPI";
import { IoMdArrowRoundBack } from "react-icons/io";

const Book = () => {
  const { userId, bookId } = useParams();
  const [book, setBook] = useState(null);
  const [loading, { on: startLoading, off: finishLoading }] = useBoolean(true);
  const navigate = useNavigate();

  useEffect(() => {
    startLoading();
    (async () => {
      const book = await getBook(userId, bookId);
      setBook(book);
      finishLoading();
    })();
  }, [userId, bookId, startLoading, finishLoading]);

  return (
    <>
      <button onClick={() => navigate(`/${userId}`)}>
        <IoMdArrowRoundBack />
      </button>
      {loading ? <Loading /> : <>{book.title}</>}
    </>
  );
};

export default Book;
