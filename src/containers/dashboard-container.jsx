import { groupBy } from "lodash";
import React, { useEffect, useMemo, useState } from "react";
import Dashboard from "../components/dashboard";
import { useSidebarContextUpdater } from "../contexts/sidebar-context";
import useBoolean from "../hooks/useBoolean";
import PropTypes from "prop-types";
import { useUserContextState } from "../contexts/user-context";
import useOnSnapshot from "../hooks/useOnSnapshot";
import FireStore from "../firebase/firestore";

const DashboardContainer = (props) => {
  const { setSelectedBook } = props;
  const { user } = useUserContextState();
  const { openSidebar } = useSidebarContextUpdater();
  const [loading, { on: startLoading, off: finishLoading }] = useBoolean(true);
  const [dialog, { on: openDialog, off: closeDialog }] = useBoolean();
  const [toDeleteBookId, setToDeleteBookId] = useState(null);

  const [categories, setCatagories] = useState(null);
  const books = useOnSnapshot(`users/${user.uid}/books`);

  const categoriesMemo = useMemo(
    () => ({ categories, setCatagories }),
    [categories]
  );

  const openBookPreview = (book) => (event) => {
    setSelectedBook(book);
    openSidebar();
  };

  const handleDelete = (id) => {
    setToDeleteBookId(id);
    openDialog();
  };

  const handleConfirm = async () => {
    const booksFS = new FireStore(`users/${user.uid}/books`);
    await booksFS.deleteDoc(toDeleteBookId);
    closeDialog();
  };

  useEffect(() => {
    startLoading();
    const groupByCategory = groupBy(books, "category");
    setCatagories(groupByCategory);
    finishLoading();
  }, [books, startLoading, finishLoading]);

  return (
    <Dashboard
      {...props}
      dialog={dialog}
      openDialog={openDialog}
      closeDialog={closeDialog}
      onDelete={handleDelete}
      onConfirm={handleConfirm}
      openBookPreview={openBookPreview}
      loading={loading}
      categoriesMemo={categoriesMemo}
    />
  );
};

DashboardContainer.propTypes = {
  setSelectedBook: PropTypes.func,
};

export default DashboardContainer;
