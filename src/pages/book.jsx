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
import ModalContainer from "../containers/modal-container";
import DialogContainer from "../containers/dialog-container";
import InputContainer from "../containers/input-container";
import useBoolean from "../hooks/useBoolean";

const Book = () => {
  const { bookId } = useParams();
  const { user } = useUserContextState();
  const [sections, setSections] = useState(null);
  const [selectedPage, setSelectedPage] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentContent, setCurrentContent] = useState();
  const [page, setPage] = useState({
    title: "",
    section: "",
  });
  const [dialog, { on: openDialog, off: closeDialog }] = useBoolean();

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

  const onSave = async () => {
    if (selectedPageMemo.selectedPage === null) {
      openDialog();
    } else {
      await handleUpdate();
    }
  };

  const handleSave = async () => {
    const content = JSON.stringify(currentContent);
    const data = { content, ...page };
    const pagesFS = new FireStore(`users/${user.uid}/books/${bookId}/pages`);
    await pagesFS.addDoc(data);
    setPage({ title: "", section: "" });
    closeDialog();
  };

  const handleUpdate = async () => {
    const content = JSON.stringify(currentContent);
    const pagesFS = new FireStore(`users/${user.uid}/books/${bookId}/pages`);
    await pagesFS.updateDoc({ content }, selectedPageMemo.selectedPage.id);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPage((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
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
          {currentContent && <ButtonContainer icon="Save" onClick={onSave} />}
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
      {dialog && (
        <ModalContainer>
          <DialogContainer hideButton={true}>
            <div role="presentation" className="bg-white font-display">
              <p className="bg-black p-1 text-white">Save Page</p>
              <div
                role="presentation"
                className="flex flex-col gap-2 px-1 py-3"
              >
                <InputContainer
                  label="Title"
                  value={page.title}
                  name="title"
                  onChange={handleInputChange}
                />
                <InputContainer
                  label="Section"
                  value={page.section}
                  name="section"
                  onChange={handleInputChange}
                />
              </div>
              <div role="presentation" className="flex justify-between p-1">
                <ButtonContainer label="Save" onClick={handleSave} />
                <ButtonContainer label="Cancel" onClick={() => closeDialog()} />
              </div>
            </div>
          </DialogContainer>
        </ModalContainer>
      )}
    </>
  );
};

export default Book;
