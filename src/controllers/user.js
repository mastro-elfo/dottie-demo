import {
  create as create_model,
  read as read_model,
  update as update_model,
  readAll as readAll_model,
} from "./model";
import { create as log, LOG_INFO, LOG_CREATE } from "./log";
import { encrypt } from "./utils";

export function create(author, { name, surname, username, password, admin }) {
  return create_model("users", author, {
    name,
    surname,
    username,
    password: encrypt(password),
    admin: { is: admin, downgrade: false },
    reset: { password: "", expire: 0 },
  }).then((res) =>
    log(author, { severity: LOG_INFO, type: LOG_CREATE, table: "users" }).then(
      () => res
    )
  );
}

export function read(id) {
  return read_model("users", id);
}

export function readAll() {
  return readAll_model("users");
}

export function update(author, data) {
  return update_model("users", author, data);
}
