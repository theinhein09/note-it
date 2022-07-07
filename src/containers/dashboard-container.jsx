import { groupBy } from "lodash";
import React, { useEffect, useMemo, useState } from "react";

import Dashboard from "../components/dashboard";
import { useSidebarContextUpdater } from "../contexts/sidebar-context";
import useBoolean from "../hooks/useBoolean";
import { getBooks } from "../utils/mockAPI";

const DashboardContainer = (props) => {
  const { setSelectedBook, userId } = props;
  const { openSidebar } = useSidebarContextUpdater();
  const [loading, { on: startLoading, off: finishLoading }] = useBoolean(true);

  const [categories, setCatagories] = useState(null);

  const categoriesMemo = useMemo(
    () => ({ categories, setCatagories }),
    [categories]
  );

  const openBookPreview = (book) => (event) => {
    if (event.currentTarget === event.target) {
      setSelectedBook(book);
      openSidebar();
    }
  };

  useEffect(() => {
    (async () => {
      startLoading();
      const books = await getBooks(userId);
      const groupByCategory = groupBy(books, "category");
      setCatagories(groupByCategory);
      finishLoading();
    })();
  }, [userId, startLoading, finishLoading]);

  return (
    <Dashboard
      {...props}
      openBookPreview={openBookPreview}
      loading={loading}
      categoriesMemo={categoriesMemo}
    />
  );
};

export default DashboardContainer;
