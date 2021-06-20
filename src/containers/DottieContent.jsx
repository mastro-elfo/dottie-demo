import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { init } from "../features/timeline";
import { DottieList } from "../components/";

export default function DottieContent({ user }) {
  const { notes, loading /*, error*/ } = useSelector((state) => state.timeline);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(init()).catch((err) => {
      console.error(err);
    });
    // eslint-disable-next-line
  }, []);

  return <DottieList list={notes} loading={loading} />;
}
