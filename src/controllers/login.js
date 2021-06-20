import { load, dump } from "./fs";

export function create(data) {
  return dump("login", data);
}

export function read() {
  return load("login", null);
}
