import { groupBy } from "lodash";
import React, { useEffect, useMemo, useState } from "react";
import Dashboard from "../components/dashboard";
import { useSidebarContextUpdater } from "../contexts/sidebar-context";
import useBoolean from "../hooks/useBoolean";
import { getBooks } from "../utils/mockAPI";
import PropTypes from "prop-types";
import { useUserContextState } from "../contexts/user-context";

const DashboardContainer = (props) => {
  const { setSelectedBook } = props;
  const { user } = useUserContextState();
  const { openSidebar } = useSidebarContextUpdater();
  const [loading, { on: startLoading, off: finishLoading }] = useBoolean(true);

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
      const books = await getBooks(user.id);
      const groupByCategory = groupBy(books, "category");
      setCatagories(groupByCategory);
      finishLoading();
    })();
  }, [user.id, startLoading, finishLoading]);

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
