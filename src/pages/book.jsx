import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { groupBy } from "lodash";
import TextEditorContainer from "../containers/text-editor-container";
import LayoutContainer from "../containers/layout-container";
import { VscChromeClose } from "react-icons/vsc";
import ButtonContainer from "../containers/button-container";
import { useUserContextState } from "../contexts/user-context";
import FireStore from "../firebase/firestore";
import useOnSnapshot from "../hooks/useOnSnapshot";
import useBoolean from "../hooks/useBoolean";
import SavePageDialog from "../components/dialog/save-page-dialog";
import { FaRegSave } from "react-icons/fa";

const Book = () => {
  const { bookId } = useParams();
  const { user } = useUserContextState();
  const [sections, setSections] = useState(null);
  const [selectedPage, setSelectedPage] = useState(null);
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
        <div className="fixed top-0 right-0 z-20">
          {currentContent && (
            <ButtonContainer
              icon={<FaRegSave title="Save Page" />}
              category="icon-only"
              onClick={onSave}
              className="mb-1 bg-black text-white"
            />
          )}
          <ButtonContainer
            icon={<VscChromeClose title="close book" />}
            category="icon-only"
            onClick={() => navigate("/")}
            className="bg-black text-white"
          />
        </div>
        <TextEditorContainer
          selectedPage={selectedPageMemo.selectedPage}
          setCurrentContent={setCurrentContent}
        />
      </LayoutContainer>
      {dialog && (
        <SavePageDialog
          handleInputChange={handleInputChange}
          handleSave={handleSave}
          closeDialog={closeDialog}
          page={page}
        />
      )}
    </>
  );
};

export default Book;
