import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { init } from "../features/timeline";
import { DottieList } from "../components/";
import { TimelineEnd } from "../errors/";

export default function DottieContent({ user }) {
  const { notes, loading /*, error*/ } = useSelector((state) => state.timeline);
  const dispatch = useDispatch();
  const [hasMore, setHasMore] = useState(true);

  const handleFetch = () => {
    Promise.reject(new TimelineEnd()).catch((err) => {
      if (err.name === "TimelineEnd") {
        setHasMore(false);
      } else {
        console.error(err);
      }
    });
  };

  useEffect(() => {
    dispatch(init()).catch((err) => {
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
