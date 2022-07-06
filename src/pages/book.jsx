import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/loading";
import useBoolean from "../hooks/useBoolean";
import { getBook } from "../utils/fakeAPI";
import { IoMdArrowRoundBack } from "react-icons/io";
import { groupBy } from "lodash";

const Book = () => {
  const { userId, bookId } = useParams();
  const [sections, setSections] = useState(null);
  const [loading, { on: startLoading, off: finishLoading }] = useBoolean(true);
  const navigate = useNavigate();

  useEffect(() => {
    startLoading();
    (async () => {
      const book = await getBook(userId, bookId);
      const pages = book.pages;
      const groupBySection = groupBy(pages, "section");
      setSections(groupBySection);
      finishLoading();
    })();
  }, [userId, bookId, startLoading, finishLoading]);

  const renderPages = () => {
    let pages = [];
    for (let section in sections) {
      pages.push(
        <Fragment key={section}>
          <h3>{section}</h3>
          {sections[section].map((page) => (
            <Fragment key={page.id}>
              <h4>{page.title}</h4>
            </Fragment>
          ))}
        </Fragment>
      );
    }

    return pages;
  };
  return (
    <>
      <h1>noteIt</h1>
      <button onClick={() => navigate(`/${userId}`)}>
        <IoMdArrowRoundBack />
      </button>
      {loading ? <Loading /> : <>{renderPages()}</>}
    </>
  );
};

export default Book;
