import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { readAll } from "../features/timeline";
import { DottieList } from "../components/";
// import { TimelineEnd } from "../errors/";

export default function DottieContent({ user }) {
  const { notes, loading, hasMore /*, error*/ } = useSelector(
    (state) => state.timeline
  );
  const dispatch = useDispatch();

  const handleFetch = () => {};

  useEffect(() => {
    dispatch(readAll()).catch((err) => {
      console.error(err);
    });
    // eslint-disable-next-line
  }, []);

  const sorted = useMemo(() => {
    console.log("Sorting", notes);
    return notes.slice().sort((a, b) => b.datetime - a.datetime);
  }, [notes]);

  return (
    <DottieList
      list={sorted}
      loading={loading}
      hasMore={hasMore}
      onFetch={handleFetch}
    />
  );
}
