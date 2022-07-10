import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/loading";
import { groupBy } from "lodash";
import TextEditorContainer from "../containers/text-editor-container";
import LayoutContainer from "../containers/layout-container";
import { VscChromeClose } from "react-icons/vsc";
import ButtonContainer from "../containers/button-container";
import { useUserContextState } from "../contexts/user-context";
import FireStore from "../firebase/firestore";
import useOnSnapshot from "../hooks/useOnSnapshot";

const Book = () => {
  const { bookId } = useParams();
  const { user } = useUserContextState();
  const [sections, setSections] = useState(null);
  const [selectedPage, setSelectedPage] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentContent, setCurrentContent] = useState();

  const navigate = useNavigate();

  const selectedPageMemo = useMemo(
    () => ({ selectedPage, setSelectedPage }),
    [selectedPage]
  );

  const pages = useOnSnapshot(`books/${bookId}/pages`);

  useEffect(() => {
    if (!user) return;
    (async () => {
      const booksFS = new FireStore(`users/${user.uid}/books`);
      const book = await booksFS.getDoc(bookId);
      setSelectedBook(book);
    })();
  }, [user, bookId]);

  useEffect(() => {
    const groupBySection = groupBy(pages, "section");
    setSections(groupBySection);
  }, [pages]);

  const savePage = () => {
    console.log(currentContent);
  };

  return (
    <LayoutContainer
      sections={sections}
      setSelectedPage={selectedPageMemo.setSelectedPage}
    >
      <nav className="ml-8 flex max-h-8 items-center bg-black px-1 font-display text-white">
        <div role="presentation" className="flex grow divide-x-2">
          {!user ? (
            <Loading />
          ) : (
            <span className="px-4">{user.displayName}</span>
          )}
          {!selectedBook ? (
            <Loading />
          ) : (
            <>
              <span className="px-4">Category: {selectedBook.category}</span>
              <span className="px-4">Title: {selectedBook.title}</span>
            </>
          )}
          {selectedPage && (
            <>
              <span className="px-4">Section: {selectedPage.section}</span>
              <span className="px-4">Page: {selectedPage.title}</span>
            </>
          )}
        </div>
        {currentContent && <ButtonContainer icon="Save" onClick={savePage} />}
        <ButtonContainer
          icon={<VscChromeClose title="close book" />}
          category="icon-only"
          onClick={() => navigate("/")}
          className="text-white"
        />
      </nav>
      <TextEditorContainer
        selectedPage={selectedPageMemo.selectedPage}
        setCurrentContent={setCurrentContent}
      />
    </LayoutContainer>
  );
};

export default Book;
