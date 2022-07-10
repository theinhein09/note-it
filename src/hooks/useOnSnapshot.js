import { useCallback, useEffect, useMemo, useState } from "react";
import FireStore from "../firebase/firestore";

const useOnSnapshot = (collection) => {
  const [data, setData] = useState([]);

  const memo = useMemo(() => ({ data, setData }), [data]);

  const fetchData = useCallback(() => {
    const firestore = new FireStore(collection);
    return firestore.onSnapshot(setData);
  }, [collection]);

  useEffect(() => {
    const unsubscribe = fetchData();

    return () => {
      unsubscribe();
    };
  }, [fetchData]);

  return memo.data;
};

export default useOnSnapshot;
