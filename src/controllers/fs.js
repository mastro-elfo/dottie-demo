const storage = sessionStorage;

export function read(file) {
  return Promise.resolve(storage.getItem(file));
}

export function write(file, content) {
  storage.setItem(file, content);
  return Promise.resolve();
}

export function load(file, defaultValue) {
  return read(file)
    .then((content) => JSON.parse(content) || defaultValue)
    .catch((err) => defaultValue);
}

export function dump(file, value) {
  return write(file, JSON.stringify(value));
}
