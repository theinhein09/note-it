import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/loading";
import useBoolean from "../hooks/useBoolean";
import { getBook } from "../utils/mockAPI";
import { groupBy } from "lodash";
import TextEditorContainer from "../containers/text-editor-container";
import LayoutContainer from "../containers/layout-container";
import { IoMdClose } from "react-icons/io";
import ButtonContainer from "../containers/button-container";
import { useUserContextState } from "../contexts/user-context";

const Book = () => {
  const { userId, bookId } = useParams();
  const [sections, setSections] = useState(null);
  const [loading, { on: startLoading, off: finishLoading }] = useBoolean(true);
  const [selectedPage, setSelectedPage] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const user = useUserContextState();
  const navigate = useNavigate();

  const selectedPageMemo = useMemo(
    () => ({ selectedPage, setSelectedPage }),
    [selectedPage]
  );

  useEffect(() => {
    startLoading();
    (async () => {
      const book = await getBook(userId, bookId);
      setSelectedBook(book);
      const pages = book.pages;
      const groupBySection = groupBy(pages, "section");
      setSections(groupBySection);
      finishLoading();
    })();
  }, [userId, bookId, startLoading, finishLoading]);

  return (
    <LayoutContainer
      sections={sections}
      setSelectedPage={selectedPageMemo.setSelectedPage}
    >
      <nav className="ml-8 flex max-h-8 items-center bg-black px-1 font-display text-white">
        <div role="presentation" className="flex grow">
          <span>{user.username}</span>
          <div role="presentation" className="mx-4 h-6 w-0.5 bg-white" />
          {loading ? <Loading /> : <span>Title: {selectedBook.title}</span>}
          <div role="presentation" className="mx-4 h-6 w-0.5 bg-white" />
          {loading ? (
            <Loading />
          ) : (
            <span>Category: {selectedBook.category}</span>
          )}
        </div>
        <ButtonContainer
          icon={<IoMdClose />}
          category="icon-only"
          onClick={() => navigate(`/${userId}`)}
        />
      </nav>
      {loading ? (
        <Loading />
      ) : (
        <TextEditorContainer selectedPage={selectedPageMemo.selectedPage} />
      )}
    </LayoutContainer>
  );
};

export default Book;
