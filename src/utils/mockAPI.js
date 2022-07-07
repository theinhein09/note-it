import users from "./mockData.json";

const createUser = (email, password) =>
  new Promise((resolve, reject) => {
    if (!email || !password) throw new Error("Email and password required.");
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (foundUser) {
      return setTimeout(() => reject(new Error("User already exists.")), 1000);
    }
    setTimeout(() => resolve(Object.values({ email })), 1000);
  });

const login = (email, password) =>
  new Promise((resolve, reject) => {
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (!foundUser) {
      return setTimeout(
        () => reject(new Error("User not found or Wrong password.")),
        1000
      );
    }
    setTimeout(() => resolve(foundUser), 1000);
  });

const getUser = (userId) =>
  new Promise((resolve, reject) => {
    const foundUser = users.find((user) => user.id === userId);
    return setTimeout(() => resolve(foundUser), 1000);
  });

const getBooks = (userId) =>
  new Promise((resolve, reject) => {
    const foundUser = users.find((user) => user.id === userId);

    return setTimeout(() => resolve(foundUser.books), 1000);
  });

const getBook = (userId, bookId) =>
  new Promise((resolve, reject) => {
    const foundUser = users.find((user) => user.id === userId);
    const foundBook = foundUser.books.find((book) => book.id === bookId);
    return setTimeout(() => resolve(foundBook, 1000));
  });

export { createUser, login, getUser, getBooks, getBook };
