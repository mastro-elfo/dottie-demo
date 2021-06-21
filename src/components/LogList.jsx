import { List } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";
import LogItem from "./LogItem";

export default function LogList({
  items = [],
  hasMore = false,
  onFetch = () => {},
}) {
  return (
    <List>
      <InfiniteScroll
        dataLength={items.length}
        hasMore={hasMore}
        next={onFetch}
        loader={<LogItem loading={true} />}
      >
        {items.map((item) => (
          <LogItem key={item.id} {...item} />
        ))}
      </InfiniteScroll>
    </List>
  );
}
