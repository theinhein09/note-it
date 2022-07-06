import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/loading";
import useBoolean from "../hooks/useBoolean";
import { getBook } from "../utils/fakeAPI";

const Book = () => {
  const { userId, bookId } = useParams();
  const [book, setBook] = useState(null);
  const [loading, { on: startLoading, off: finishLoading }] = useBoolean(true);
  console.log(book);
  useEffect(() => {
    startLoading();
    (async () => {
      const book = await getBook(userId, bookId);
      setBook(book);
      finishLoading();
    })();
  }, [userId, bookId, startLoading, finishLoading]);

  return <>{loading ? <Loading /> : <>{book.title}</>}</>;
};

export default Book;
