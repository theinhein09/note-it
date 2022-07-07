import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/loading";
import useBoolean from "../hooks/useBoolean";
import { getBook } from "../utils/fakeAPI";
import { IoMdArrowRoundBack } from "react-icons/io";
import { groupBy } from "lodash";
import TextEditorContainer from "../containers/text-editor-container";
import LayoutContainer from "../containers/layout-container";

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

  return (
    <LayoutContainer sections={sections}>
      <button onClick={() => navigate(`/${userId}`)}>
        <IoMdArrowRoundBack />
      </button>
      {loading ? <Loading /> : <TextEditorContainer />}
    </LayoutContainer>
  );
};

export default Book;
