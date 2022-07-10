import { groupBy } from "lodash";
import React, { useEffect, useMemo, useState } from "react";
import Dashboard from "../components/dashboard";
import { useSidebarContextUpdater } from "../contexts/sidebar-context";
import useBoolean from "../hooks/useBoolean";
import PropTypes from "prop-types";
import { useUserContextState } from "../contexts/user-context";
import FireStore from "../firebase/firestore";

const DashboardContainer = (props) => {
  const { setSelectedBook } = props;
  const { user } = useUserContextState();
  const { openSidebar } = useSidebarContextUpdater();
  const [loading, { on: startLoading, off: finishLoading }] = useBoolean(true);

  const [books, setBooks] = useState([]);

  const [categories, setCatagories] = useState(null);

  const categoriesMemo = useMemo(
    () => ({ categories, setCatagories }),
    [categories]
  );

  const openBookPreview = (book) => (event) => {
    setSelectedBook(book);
    openSidebar();
  };

  useEffect(() => {
    (async () => {
      startLoading();
      const booksFS = new FireStore(`users/${user.uid}/books`);
      booksFS.onSnapshot(setBooks);

      finishLoading();
    })();
  }, [user.uid, startLoading, finishLoading]);

  useEffect(() => {
    startLoading();
    const groupByCategory = groupBy(books, "category");
    setCatagories(groupByCategory);
    finishLoading();
  }, [books, startLoading, finishLoading]);

  return (
    <Dashboard
      {...props}
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
