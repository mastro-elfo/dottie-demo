import { nanoid } from "nanoid";
import {
  create as create_table,
  read as read_table,
  readAll as readAll_table,
  update as update_table,
} from "./table";

export function create(table, author, data) {
  const now = new Date().toLocaleString();
  const _author = { ...author };
  delete _author.password;
  return create_table(table, {
    ...data,
    cDateTime: now,
    uDateTime: now,
    cAuthor: _author,
    uAuthor: _author,
    deleted: false,
    id: nanoid(),
  });
}

export function read(table, id) {
  return read_table(table, id);
}

export function readAll(table) {
  return readAll_table(table);
}

export function update(table, author, data) {
  return update_table(table, data.id, {
    ...data,
    uDateTime: new Date().toLocaleString(),
    uAuthor: author,
  });
}

// export default class Model {
//   constructor({ id, cDateTime, cAuthor, uDateTime, uAuthor, deleted }) {
//     this._data = { id, cDateTime, cAuthor, uDateTime, uAuthor, deleted };
//   }
//
//   get data() {
//     return this._data;
//   }
//
//   get id() {
//     return this._data.id;
//   }
//
//   get cDateTime() {
//     return this._data.cDateTime;
//   }
//
//   get uDateTime() {
//     return this._data.uDateTime;
//   }
//
//   get cAuthor() {
//     return this._data.cAuthor;
//   }
//
//   get uAuthor() {
//     return this._data.uAuthor;
//   }
//
//   get deleted() {
//     return this._data.deleted;
//   }
//
//   create(author) {
//     this._data.cDateTime = new Date().toLocaleString();
//     this._data.uDateTime = this._data.cDateTime;
//     this._data.cAuthor = author;
//     this._data.uAuthor = author;
//     this._data.deleted = true;
//     this._data.id = nanoid();
//   }
// }
