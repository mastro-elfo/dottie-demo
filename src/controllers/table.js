import { load, dump } from "./fs";

export function create(table, data, defaultValue = []) {
  return load(table, defaultValue)
    .then((list) => [data, ...list])
    .then((list) => dump(table, list));
}

export function read(table, id, defaultValue = []) {
  return load(table, defaultValue).then((list) =>
    list.find((i) => i.id === id)
  );
}

export function readAll(table, defaultValue = []) {
  return load(table, defaultValue);
}

export function update(table, id, data, defaultValue = []) {
  return load(table, defaultValue)
    .then((list) => {
      const index = list.findIndex((i) => i.id === id);
      list[index] = data;
      return list;
    })
    .then((list) => dump(table, list));
}

export function destroy(table, id, defaultValue = []) {
  return load(table, defaultValue)
    .then((list) => list.filter((i) => i.id !== id))
    .then((list) => dump(table, list));
}
