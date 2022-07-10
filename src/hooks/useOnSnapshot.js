import { useCallback, useEffect, useMemo, useState } from "react";
import { useUserContextState } from "../contexts/user-context";
import FireStore from "../firebase/firestore";

const useOnSnapshot = (collection) => {
  const [data, setData] = useState([]);
  const { user } = useUserContextState();
  const memo = useMemo(() => ({ data, setData }), [data]);

  const fetchData = useCallback(() => {
    const firestore = new FireStore(`users/${user.uid}/${collection}`);
    return firestore.onSnapshot(setData);
  }, [user, collection]);

  useEffect(() => {
    if (!user) return;
    const unsubscribe = fetchData();

    return () => {
      unsubscribe();
    };
  }, [fetchData, user]);

  return memo.data;
};

export default useOnSnapshot;
