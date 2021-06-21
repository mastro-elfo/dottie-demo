import {
  create as create_model,
  read as read_model,
  // update as update_model,
  readAll as readAll_model,
} from "./model";
import { log, LOG_INFO, LOG_CREATE } from "./log";

export function create(author, { datetime, title, note }) {
  return create_model("timeline", author, {
    datetime: +new Date(datetime),
    title,
    note,
  }).then(
    log(author, { severity: LOG_INFO, type: LOG_CREATE, table: "timeline" })
  );
}

export function read(id) {
  return read_model("timeline", id);
}

export function readAll() {
  return readAll_model("timeline").then((list) => list.slice(0, 10));
}
