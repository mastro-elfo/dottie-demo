import {
  create as create_model,
  read as read_model,
  // update as update_model,
  readAll as readAll_model,
} from "./model";

export function create(author, { datetime, title, note }) {
  console.log(datetime, title, note);
  return create_model("timeline", author, {
    datetime: +new Date(datetime),
    title,
    note,
  });
}

export function read(id) {
  return read_model("timeline", id);
}

export function readAll() {
  return readAll_model("timeline").then((list) => list.slice(0, 10));
}
