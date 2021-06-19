import {
  create as create_model,
  read as read_model,
  update as update_model,
  readAll as readAll_model,
} from "./model";
import { encrypt } from "./utils";

export function create(author, { name, surname, username, password, admin }) {
  return create_model("users", author, {
    name,
    surname,
    username,
    password: encrypt(password),
    admin: { is: admin, downgrade: false },
    reset: { password: "", expire: 0 },
  });
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

// import hash from "hash.js";
// import Model from "./model";
//
// export default class User extends Model {
//   constructor({ name, surname, username, password, admin, reset, ...rest }) {
//     super(rest);
//     this._data = {
//       ...this._data,
//       name,
//       surname,
//       username,
//       password,
//       admin,
//       reset,
//     };
//   }
//
//   get name() {
//     return this._data.name;
//   }
//
//   set name(value) {
//     this._data.name = value;
//   }
//
//   get surname() {
//     return this._data.surname;
//   }
//
//   set surname(value) {
//     this._data.surname = value;
//   }
//
//   get username() {
//     return this._data.username;
//   }
//
//   set username(value) {
//     this._data.username = value;
//   }
//
//   get password() {
//     return this._data.password;
//   }
//
//   set password(value) {
//     this._data.password = hash.sha256().update(value).digest("hex");
//   }
//
//   get admin() {
//     return this._data.admin.is;
//   }
//
//   set admin(value) {
//     if (value) {
//       this._data.admin.is = true;
//     } else if (this._data.admin.is) {
//       this._data.admin.downgrade = true;
//     }
//   }
//
//   get downgrade() {
//     return this._data.admin.downgrade;
//   }
//
//   set downgrade(value) {
//     if (this._data.admin.downgrade) {
//       this._data.admin.is = false;
//       this._data.admin.downgrade = false;
//     }
//   }
//
//   resetPassword() {
//     // Generate a random OTP
//     const rnd = String(Math.random()).substr(2, 4);
//     this._data.reset.password = hash.sha256().update(rnd).digest("hex");
//     // 600000: 10 min
//     this._data.reset.expire = +new Date() + 600000;
//     return rnd;
//   }
// }
