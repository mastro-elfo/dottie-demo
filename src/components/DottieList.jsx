import { Timeline } from "@material-ui/lab";
import InfiniteScroll from "react-infinite-scroll-component";

import { DottieItem } from "../components/";

export default function DottieList({
  list = [],
  loading = false,
  onFetch = () => {},
  hasMore = false,
}) {
  return (
    <Timeline>
      <InfiniteScroll
        dataLength={list.length}
        hasMore={hasMore}
        next={onFetch}
        loader={<DottieItem loading={true} />}
      >
        {list.map((item) => (
          <DottieItem key={item.id} {...item} />
        ))}
      </InfiniteScroll>
    </Timeline>
  );
}
