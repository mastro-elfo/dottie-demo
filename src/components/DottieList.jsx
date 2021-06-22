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
      {list.length === 0 && (
        <DottieItem
          datetime={+new Date()}
          title="There are no notes to show"
          note="Click the + button to add a new note or edit the search parameters"
        />
      )}
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
