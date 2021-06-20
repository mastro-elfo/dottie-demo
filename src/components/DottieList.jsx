import { Timeline } from "@material-ui/lab";

import { DottieItem } from "../components/";

export default function DottieList({ list = [], loading = false }) {
  return (
    <Timeline>
      {list.map((item) => (
        <DottieItem key={item.id} {...item} />
      ))}
      {!!loading &&
        Array(10)
          .fill(true)
          .map((_, i) => <DottieItem key={`sk-${i}`} loading={true} />)}
    </Timeline>
  );
}
