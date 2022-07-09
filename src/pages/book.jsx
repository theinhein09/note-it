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
  const { bookId } = useParams();
  const user = useUserContextState();
  const [sections, setSections] = useState(null);
  const [loading, { on: startLoading, off: finishLoading }] = useBoolean(true);
  const [selectedPage, setSelectedPage] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [contentState, setContentState] = useState();

  const navigate = useNavigate();

  const selectedPageMemo = useMemo(
    () => ({ selectedPage, setSelectedPage }),
    [selectedPage]
  );

  useEffect(() => {
    startLoading();
    (async () => {
      const book = await getBook(user.id, bookId);
      setSelectedBook(book);
      const pages = book.pages;
      const groupBySection = groupBy(pages, "section");
      setSections(groupBySection);
      finishLoading();
    })();
  }, [user.id, bookId, startLoading, finishLoading]);

  const savePage = () => {
    console.log(contentState);
  };

  return (
    <LayoutContainer
      sections={sections}
      setSelectedPage={selectedPageMemo.setSelectedPage}
    >
      <nav className="ml-8 flex max-h-8 items-center bg-black px-1 font-display text-white">
        <div role="presentation" className="flex grow divide-x-2">
          <span className="px-4">{user.displayName}</span>
          {loading ? (
            <Loading />
          ) : (
            <span className="px-4">Category: {selectedBook.category}</span>
          )}
          {loading ? (
            <Loading />
          ) : (
            <span className="px-4">Title: {selectedBook.title}</span>
          )}
          {selectedPage && (
            <>
              <span className="px-4">Section: {selectedPage.section}</span>
              <span className="px-4">Page: {selectedPage.title}</span>
            </>
          )}
        </div>
        <ButtonContainer icon="Save" onClick={savePage} />
        <ButtonContainer
          icon={<IoMdClose />}
          category="icon-only"
          onClick={() => navigate(`/${user.id}`)}
        />
      </nav>
      {loading ? (
        <Loading />
      ) : (
        <>
          <TextEditorContainer
            selectedPage={selectedPageMemo.selectedPage}
            setContentState={setContentState}
          />
        </>
      )}
    </LayoutContainer>
  );
};

export default Book;
