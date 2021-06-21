import { useEffect } from "react";
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

  return (
    <DottieList
      list={notes}
      loading={loading}
      hasMore={hasMore}
      onFetch={handleFetch}
    />
  );
}
