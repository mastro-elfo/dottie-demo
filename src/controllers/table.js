import { load, dump } from "./fs";

export function create(table, data) {
  return load(table, [])
    .then((list) => [...list, data])
    .then((list) => dump(table, list));
}

export function read(table, id) {
  return load(table, []).then((list) => list.find((i) => i.id === id));
}

export function readAll(table) {
  return load(table, []);
}

export function update(table, id, data) {
  return load(table, [])
    .then((list) => {
      const index = list.findIndex((i) => i.id === id);
      list[index] = data;
      return list;
    })
    .then((list) => dump(table, list));
}

export function destroy(table, id) {
  return load(table, [])
    .then((list) => list.filter((i) => i.id !== id))
    .then((list) => dump(table, list));
}
