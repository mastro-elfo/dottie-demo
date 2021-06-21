import { create as create_model, readAll as readAll_model } from "./model";

export const LOG_DEBUG = "debug";
export const LOG_INFO = "info";
export const LOG_WARNING = "warning";
export const LOG_ERROR = "error";
export const LOG_CREATE = "create";
export const LOG_UPDATE = "update";
export const LOG_DELETE = "delete";
export const LOG_LOGIN = "login";
export const LOG_NONE = "none";

export function log(author, data) {
  return (res) => create(author, data).then(() => res);
}

export function create(
  author,
  { severity = LOG_DEBUG, type = LOG_NONE, table = LOG_NONE, short = "" }
) {
  return create_model("log", author, {
    severity,
    type,
    table,
    short,
  });
}

export function readAll() {
  return readAll_model("log");
}
