import { Timeline } from "@material-ui/lab";

import { DottieItem } from "../components/";

export default function DottieList({ list }) {
  return (
    <Timeline>
      {list.map((item) => (
        <DottieItem key={item.id} {...item} />
      ))}
    </Timeline>
  );
}
