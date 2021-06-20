export class UserNotFound extends Error {
  constructor(message) {
    super(message);
    this.name = "UserNotFound";
  }
}

export class NotLogged extends Error {
  constructor(message) {
    super(message);
    this.name = "NotLogged";
  }
}
